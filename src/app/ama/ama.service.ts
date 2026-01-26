import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

export interface QuestionInput {
  content: string;
  email?: string;
  subscribe: boolean;
  anonymous_id?: string;
}

export interface QuestionResponse {
  id: string;
  hash_id: string;
  content: string;
  answer?: string;
  created_at: string;
  answered_at?: string;
  is_answered: boolean;
  anonymous_id: string;
  is_deleted?: boolean;
  deleted_at?: string;
}

export interface SubmitQuestionResponse {
  message: string;
  question: QuestionResponse;
}

export interface GetQuestionsResponse {
  questions: QuestionResponse[];
  count: number;
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
  has_more: boolean;
}

export interface WebSocketMessage {
  type: string;
  payload: any;
  anonymous_id?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AmaService {
  // Configure these URLs based on your deployment
  private apiUrl = 'https://artbryja.fly.dev/api/v1';
  private wsUrl = 'wss://artbryja.fly.dev/api/v1/ws';
  private ws: WebSocket | null = null;
  private wsMessages$ = new Subject<WebSocketMessage>();

  constructor(private http: HttpClient) {}

  /**
   * Submit a new question
   */
  submitQuestion(input: QuestionInput): Observable<SubmitQuestionResponse> {
    return this.http.post<SubmitQuestionResponse>(`${this.apiUrl}/questions`, input);
  }

  /**
   * Get all questions for a specific anonymous ID with pagination
   */
  getQuestionsByAnonymousId(anonymousId: string, page: number = 1, pageSize: number = 10): Observable<GetQuestionsResponse> {
    return this.http.get<GetQuestionsResponse>(`${this.apiUrl}/questions`, {
      params: {
        anonymous_id: anonymousId,
        page: page.toString(),
        page_size: pageSize.toString()
      }
    });
  }

  /**
   * Get a specific question by hash ID
   */
  getQuestionByHash(hashId: string): Observable<{ question: QuestionResponse }> {
    return this.http.get<{ question: QuestionResponse }>(`${this.apiUrl}/questions/${hashId}`);
  }

  /**
   * Subscribe to answer notifications for a question
   */
  subscribeToAnswer(hashId: string, email: string, subscribe: boolean): Observable<any> {
    return this.http.post(`${this.apiUrl}/questions/${hashId}/subscribe`, {
      email,
      subscribe
    });
  }

  /**
   * Connect to WebSocket for real-time updates
   */
  connectWebSocket(anonymousId: string): Observable<WebSocketMessage> {
    if (this.ws) {
      this.ws.close();
    }

    this.ws = new WebSocket(`${this.wsUrl}?anonymous_id=${anonymousId}`);

    this.ws.onopen = () => {
      console.log('WebSocket connected');
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
      } catch (e) {
        console.error('Failed to parse WebSocket message:', e);
      }
    };

    this.ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    this.ws.onclose = () => {
      console.log('WebSocket disconnected');
      // Attempt to reconnect after 5 seconds
      setTimeout(() => {
        if (anonymousId) {
          this.connectWebSocket(anonymousId);
        }
      }, 5000);
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

  /**
   * Send a ping message to keep the connection alive
   */
  sendPing(): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify({ type: 'ping' }));
    }
  }
}
