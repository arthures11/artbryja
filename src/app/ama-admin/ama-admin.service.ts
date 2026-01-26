import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface AdminQuestionResponse {
  id: string;
  hash_id: string;
  content: string;
  answer?: string;
  email?: string;
  subscribed: boolean;
  ip_address: string;
  user_agent: string;
  created_at: string;
  answered_at?: string;
  is_answered: boolean;
  anonymous_id: string;
}

export interface AdminQuestionsResponse {
  questions: AdminQuestionResponse[];
  count: number;
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
  has_more: boolean;
}

export interface AdminStatsResponse {
  total_questions: number;
  unanswered_questions: number;
  answered_questions: number;
}

export interface WebSocketMessage {
  type: string;
  payload: any;
}

@Injectable({
  providedIn: 'root'
})
export class AmaAdminService {
  private apiUrl = 'https://artbryja.fly.dev/api/v1';
  private adminPassword: string | null = null;
  private isAuthenticated$ = new BehaviorSubject<boolean>(false);

  // WebSocket
  private ws: WebSocket | null = null;
  private wsMessages$ = new Subject<WebSocketMessage>();

  constructor(private http: HttpClient) {
    // Check if password is stored in sessionStorage
    const storedPassword = sessionStorage.getItem('amaAdminPassword');
    if (storedPassword) {
      this.adminPassword = storedPassword;
      this.isAuthenticated$.next(true);
    }
  }

  get isAuthenticated(): Observable<boolean> {
    return this.isAuthenticated$.asObservable();
  }

  get isLoggedIn(): boolean {
    return this.isAuthenticated$.value;
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Admin-Password': this.adminPassword || ''
    });
  }

  /**
   * Verify admin password
   */
  verifyPassword(password: string): Observable<{ success: boolean; message?: string; error?: string }> {
    return this.http.post<{ success: boolean; message?: string; error?: string }>(
      `${this.apiUrl}/admin/verify`,
      { password }
    ).pipe(
      tap(response => {
        if (response.success) {
          this.adminPassword = password;
          sessionStorage.setItem('amaAdminPassword', password);
          this.isAuthenticated$.next(true);
        }
      })
    );
  }

  /**
   * Logout - clear stored password
   */
  logout(): void {
    this.adminPassword = null;
    sessionStorage.removeItem('amaAdminPassword');
    this.isAuthenticated$.next(false);
  }

  /**
   * Get dashboard statistics
   */
  getStats(): Observable<AdminStatsResponse> {
    return this.http.get<AdminStatsResponse>(`${this.apiUrl}/admin/stats`, {
      headers: this.getHeaders()
    });
  }

  /**
   * Get all questions with pagination
   */
  getQuestions(page: number = 1, pageSize: number = 20, status?: string): Observable<AdminQuestionsResponse> {
    let url = `${this.apiUrl}/admin/questions?page=${page}&page_size=${pageSize}`;
    if (status) {
      url += `&status=${status}`;
    }
    return this.http.get<AdminQuestionsResponse>(url, {
      headers: this.getHeaders()
    });
  }

  /**
   * Get question details
   */
  getQuestionDetails(hashId: string): Observable<{ question: AdminQuestionResponse }> {
    return this.http.get<{ question: AdminQuestionResponse }>(
      `${this.apiUrl}/admin/questions/${hashId}`,
      { headers: this.getHeaders() }
    );
  }

  /**
   * Submit answer to a question
   */
  submitAnswer(hashId: string, answer: string): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/admin/questions/${hashId}/answer`,
      { content: answer },
      { headers: this.getHeaders() }
    );
  }

  /**
   * Delete a question
   */
  deleteQuestion(hashId: string): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}/admin/questions/${hashId}`,
      { headers: this.getHeaders() }
    );
  }

  /**
   * WebSocket connection for real-time updates
   */
  connectWebSocket(): Observable<WebSocketMessage> {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      return this.wsMessages$.asObservable();
    }

    // Use 'admin' as the user ID for admin WebSocket connections
    const wsUrl = `${this.apiUrl.replace('https', 'wss')}/ws?user_id=admin&token=${this.adminPassword || ''}`;

    this.ws = new WebSocket(wsUrl);

    this.ws.onopen = () => {
      console.log('Admin WebSocket connected');
      // Send ping every 30 seconds to keep connection alive
      setInterval(() => {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
          this.ws.send(JSON.stringify({ type: 'ping' }));
        }
      }, 30000);
    };

    this.ws.onmessage = (event) => {
      try {
        const message: WebSocketMessage = JSON.parse(event.data);
        this.wsMessages$.next(message);
      } catch (error) {
        console.error('Failed to parse WebSocket message:', error);
      }
    };

    this.ws.onclose = () => {
      console.log('Admin WebSocket disconnected');
      // Auto-reconnect after 5 seconds
      setTimeout(() => {
        if (this.isLoggedIn) {
          this.connectWebSocket();
        }
      }, 5000);
    };

    this.ws.onerror = (error) => {
      console.error('Admin WebSocket error:', error);
    };

    return this.wsMessages$.asObservable();
  }

  /**
   * Disconnect WebSocket
   */
  disconnectWebSocket(): void {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }
}
