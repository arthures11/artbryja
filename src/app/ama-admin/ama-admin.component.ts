import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AmaAdminService, AdminQuestionResponse, AdminStatsResponse, WebSocketMessage } from './ama-admin.service';

@Component({
  selector: 'app-ama-admin',
  standalone: false,
  templateUrl: './ama-admin.component.html',
  styleUrls: ['./ama-admin.component.css']
})
export class AmaAdminComponent implements OnInit, OnDestroy {
  // Auth state
  isAuthenticated: boolean = false;
  password: string = '';
  loginError: string = '';
  isLoggingIn: boolean = false;

  // Dashboard state
  stats: AdminStatsResponse | null = null;
  questions: AdminQuestionResponse[] = [];
  isLoading: boolean = false;

  // Pagination
  currentPage: number = 1;
  pageSize: number = 20;
  totalQuestions: number = 0;
  totalPages: number = 0;
  hasMore: boolean = false;

  // Filter
  statusFilter: string = 'unanswered'; // 'all', 'answered', 'unanswered'

  // Answer modal
  selectedQuestion: AdminQuestionResponse | null = null;
  answerText: string = '';
  isSubmittingAnswer: boolean = false;

  // Notification
  showNotification: boolean = false;
  notificationMessage: string = '';
  notificationType: 'success' | 'error' = 'success';

  // Real-time updates
  private wsSubscription: Subscription | null = null;
  private originalTitle: string = '';
  protected newQuestionsCount: number = 0;
  private notificationPermission: NotificationPermission = 'default';

  constructor(private adminService: AmaAdminService) {}

  ngOnInit(): void {
    // Store original title for restoration
    this.originalTitle = document.title;

    // Request notification permission
    this.requestNotificationPermission();

    this.adminService.isAuthenticated.subscribe(isAuth => {
      this.isAuthenticated = isAuth;
      if (isAuth) {
        this.loadStats();
        this.loadQuestions();
        this.connectWebSocket();
      } else {
        this.disconnectWebSocket();
        this.resetTitle();
      }
    });
  }

  ngOnDestroy(): void {
    this.disconnectWebSocket();
    this.resetTitle();
  }

  login(): void {
    if (!this.password.trim()) {
      this.loginError = 'Please enter a password';
      return;
    }

    this.isLoggingIn = true;
    this.loginError = '';

    this.adminService.verifyPassword(this.password).subscribe({
      next: (response) => {
        this.isLoggingIn = false;
        if (!response.success) {
          this.loginError = response.error || 'Invalid password';
        }
      },
      error: (error) => {
        this.isLoggingIn = false;
        this.loginError = error.error?.error || 'Failed to verify password';
      }
    });
  }

  logout(): void {
    this.adminService.logout();
    this.password = '';
    this.stats = null;
    this.questions = [];
  }

  loadStats(): void {
    this.adminService.getStats().subscribe({
      next: (stats) => {
        this.stats = stats;
      },
      error: (error) => {
        console.error('Failed to load stats:', error);
      }
    });
  }

  loadQuestions(page: number = 1): void {
    this.isLoading = true;
    this.currentPage = page;

    const status = this.statusFilter === 'all' ? undefined : this.statusFilter;

    this.adminService.getQuestions(page, this.pageSize, status).subscribe({
      next: (response) => {
        this.questions = response.questions || [];
        this.totalQuestions = response.total;
        this.totalPages = response.total_pages;
        this.hasMore = response.has_more;
        this.isLoading = false;

        // Reset new questions counter when viewing questions
        this.newQuestionsCount = 0;
        this.updateTitle();
      },
      error: (error) => {
        console.error('Failed to load questions:', error);
        this.isLoading = false;
        this.showNotificationMessage('Failed to load questions', 'error');
      }
    });
  }

  onFilterChange(): void {
    this.loadQuestions(1);
  }

  // WebSocket and Notifications
  connectWebSocket(): void {
    this.wsSubscription = this.adminService.connectWebSocket().subscribe({
      next: (message: WebSocketMessage) => {
        this.handleWebSocketMessage(message);
      },
      error: (error) => {
        console.error('Admin WebSocket error:', error);
      }
    });
  }

  disconnectWebSocket(): void {
    if (this.wsSubscription) {
      this.wsSubscription.unsubscribe();
      this.wsSubscription = null;
    }
    this.adminService.disconnectWebSocket();
  }

  handleWebSocketMessage(message: WebSocketMessage): void {
    switch (message.type) {
      case 'question_submitted':
      case 'new_question':
        // New question submitted
        this.onNewQuestion();
        break;
      case 'pong':
        // Heartbeat response
        console.log('Admin WebSocket heartbeat received');
        break;
      default:
        console.log('Unknown WebSocket message type:', message.type);
    }
  }

  onNewQuestion(): void {
    // Update stats and questions
    this.loadStats();
    this.loadQuestions(this.currentPage);

    // Increment new questions counter
    this.newQuestionsCount++;

    // Update page title
    this.updateTitle();

    // Show browser notification
    this.showBrowserNotification();

    // Show in-app notification
    this.showNotificationMessage(`New question received! (${this.newQuestionsCount} new)`, 'success');
  }

  requestNotificationPermission(): void {
    if ('Notification' in window) {
      this.notificationPermission = Notification.permission;
      if (Notification.permission === 'default') {
        Notification.requestPermission().then(permission => {
          this.notificationPermission = permission;
        });
      }
    }
  }

  showBrowserNotification(): void {
    if ('Notification' in window && Notification.permission === 'granted') {
      const notification = new Notification('AMA - New Question!', {
        body: 'A new question has been submitted and needs your attention.',
        icon: '/favicon.ico',
        badge: '/favicon.ico',
        tag: 'ama-new-question'
      });

      notification.onclick = () => {
        window.focus();
        notification.close();
      };

      // Auto-close after 5 seconds
      setTimeout(() => {
        notification.close();
      }, 5000);
    }
  }

  updateTitle(): void {
    if (this.newQuestionsCount > 0) {
      document.title = `(${this.newQuestionsCount}) AMA Admin`;
    } else {
      this.resetTitle();
    }
  }

  resetTitle(): void {
    document.title = this.originalTitle;
    this.newQuestionsCount = 0;
  }

  resetNewQuestionsCounter(): void {
    this.newQuestionsCount = 0;
    this.updateTitle();
  }

  // Pagination
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.loadQuestions(page);
    }
  }

  nextPage(): void {
    if (this.hasMore) {
      this.loadQuestions(this.currentPage + 1);
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.loadQuestions(this.currentPage - 1);
    }
  }

  get pageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }

  // Answer modal
  openAnswerModal(question: AdminQuestionResponse): void {
    this.selectedQuestion = question;
    this.answerText = question.answer || '';
  }

  closeAnswerModal(): void {
    this.selectedQuestion = null;
    this.answerText = '';
  }

  submitAnswer(): void {
    if (!this.selectedQuestion || !this.answerText.trim()) {
      this.showNotificationMessage('Please enter an answer', 'error');
      return;
    }

    this.isSubmittingAnswer = true;

    this.adminService.submitAnswer(this.selectedQuestion.hash_id, this.answerText.trim()).subscribe({
      next: () => {
        this.isSubmittingAnswer = false;
        this.showNotificationMessage('Answer submitted successfully!', 'success');
        this.closeAnswerModal();
        this.loadStats();
        this.loadQuestions(this.currentPage);
      },
      error: (error) => {
        this.isSubmittingAnswer = false;
        this.showNotificationMessage(error.error?.error || 'Failed to submit answer', 'error');
      }
    });
  }

  // Helpers
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  truncateText(text: string, maxLength: number = 100): string {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }

  deleteQuestion(question: AdminQuestionResponse): void {
    if (!confirm(`Are you sure you want to delete this question?\n\n"${question.content}"\n\nThis action cannot be undone.`)) {
      return;
    }

    this.adminService.deleteQuestion(question.hash_id).subscribe({
      next: () => {
        this.showNotificationMessage('Question deleted successfully', 'success');
        this.loadStats();
        this.loadQuestions(this.currentPage);
      },
      error: (error) => {
        console.error('Failed to delete question:', error);
        this.showNotificationMessage(error.error?.error || 'Failed to delete question', 'error');
      }
    });
  }

  showNotificationMessage(message: string, type: 'success' | 'error' = 'success'): void {
    this.notificationMessage = message;
    this.notificationType = type;
    this.showNotification = true;

    setTimeout(() => {
      this.showNotification = false;
    }, 5000);
  }
}
