import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AmaService, QuestionResponse, WebSocketMessage } from './ama.service';

@Component({
  selector: 'app-ama',
  standalone: false,
  templateUrl: './ama.component.html',
  styleUrls: ['./ama.component.css']
})
export class AmaComponent implements OnInit, OnDestroy {
  question: string = '';
  email: string = '';
  isSubmitting: boolean = false;
  isLoadingHistory: boolean = false;
  userId: string = '';
  showNotification: boolean = false;
  notificationMessage: string = '';
  notificationType: 'success' | 'error' = 'success';

  // Questions history with pagination
  questionsHistory: QuestionResponse[] = [];
  currentPage: number = 1;
  pageSize: number = 10;
  totalQuestions: number = 0;
  totalPages: number = 0;
  hasMore: boolean = false;

  // WebSocket subscription
  private wsSubscription: Subscription | null = null;

  constructor(private amaService: AmaService) {}

  ngOnInit(): void {
    // Check if there's a user ID in URL for sharing (uid parameter)
    const urlParams = new URLSearchParams(window.location.search);
    const sharedUserId = urlParams.get('uid');

    if (sharedUserId) {
      // Use the shared user ID from URL
      this.userId = sharedUserId;
      localStorage.setItem('amaUserId', this.userId);
    } else {
      // Check if user has existing session ID in localStorage
      const storedUserId = localStorage.getItem('amaUserId');

      if (!storedUserId) {
        // Generate new unique user ID and store in localStorage
        this.userId = this.generateUserId();
        localStorage.setItem('amaUserId', this.userId);
      } else {
        this.userId = storedUserId;
      }
    }

    // Load saved email from localStorage
    const storedEmail = localStorage.getItem('amaUserEmail');
    if (storedEmail) {
      this.email = storedEmail;
    }

    // Load questions history
    this.loadQuestionsHistory();

    // Connect to WebSocket for real-time updates
    this.connectWebSocket();
  }

  ngOnDestroy(): void {
    // Clean up WebSocket connection
    if (this.wsSubscription) {
      this.wsSubscription.unsubscribe();
    }
    this.amaService.disconnectWebSocket();
  }

  generateUserId(): string {
    // Generate unique user/session identifier using timestamp and random string
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substring(2, 8);
    return timestamp + randomStr;
  }

  loadQuestionsHistory(page: number = 1): void {
    this.isLoadingHistory = true;
    this.currentPage = page;

    this.amaService.getQuestionsByAnonymousId(this.userId, page, this.pageSize).subscribe({
      next: (response) => {
        this.questionsHistory = response.questions || [];
        this.totalQuestions = response.total;
        this.totalPages = response.total_pages;
        this.hasMore = response.has_more;
        this.isLoadingHistory = false;
      },
      error: (error) => {
        console.error('Failed to load questions history:', error);
        this.isLoadingHistory = false;
        // Don't show error notification for history loading - it's not critical
      }
    });
  }

  // Pagination methods
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.loadQuestionsHistory(page);
    }
  }

  nextPage(): void {
    if (this.hasMore) {
      this.loadQuestionsHistory(this.currentPage + 1);
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.loadQuestionsHistory(this.currentPage - 1);
    }
  }

  // Generate page numbers for pagination
  get pageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);

    // Adjust start if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }

  connectWebSocket(): void {
    this.wsSubscription = this.amaService.connectWebSocket(this.userId).subscribe({
      next: (message: WebSocketMessage) => {
        this.handleWebSocketMessage(message);
      },
      error: (error) => {
        console.error('WebSocket error:', error);
      }
    });
  }

  handleWebSocketMessage(message: WebSocketMessage): void {
    switch (message.type) {
      case 'answer_received':
        // Update the question in history
        const answeredQuestion = message.payload as QuestionResponse;
        const index = this.questionsHistory.findIndex(q => q.hash_id === answeredQuestion.hash_id);
        if (index !== -1) {
          this.questionsHistory[index] = answeredQuestion;
        }
        this.showNotificationMessage('Your question has been answered!', 'success');
        break;
      case 'pong':
        // Heartbeat response
        console.log('WebSocket heartbeat received');
        break;
      default:
        console.log('Unknown WebSocket message type:', message.type);
    }
  }

  submitQuestion(): void {
    if (!this.question.trim()) {
      this.showNotificationMessage('Please enter a question first', 'error');
      return;
    }

    this.isSubmitting = true;

    // Make actual API call to submit question
    this.amaService.submitQuestion({
      content: this.question.trim(),
      email: this.email.trim() || undefined,
      subscribe: !!this.email.trim(),
      anonymous_id: this.userId
    }).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        // Add the new question to the history at the beginning
        this.questionsHistory.unshift(response.question);
        this.totalQuestions++;
        // Clear only the question, keep the email saved
        this.question = '';
        // Save email to localStorage for future use
        if (this.email.trim()) {
          localStorage.setItem('amaUserEmail', this.email.trim());
        }
        this.showNotificationMessage('Question submitted successfully!', 'success');
      },
      error: (error) => {
        this.isSubmitting = false;
        console.error('Failed to submit question:', error);

        let errorMessage = 'Failed to submit question. Please try again.';
        if (error.status === 429) {
          const retryAfter = error.error?.retry_after || 60;
          errorMessage = `You can only submit 1 question per minute. Please wait ${retryAfter} seconds.`;
        } else if (error.error?.error) {
          errorMessage = error.error.error;
        }

        this.showNotificationMessage(errorMessage, 'error');
      }
    });
  }

  showNotificationMessage(message: string, type: 'success' | 'error' = 'success'): void {
    this.notificationMessage = message;
    this.notificationType = type;
    this.showNotification = true;

    // Auto-hide notification after 5 seconds
    setTimeout(() => {
      this.showNotification = false;
    }, 5000);
  }

  copySessionLink(): void {
    const sessionLink = `${window.location.origin}/ama?uid=${this.userId}`;
    navigator.clipboard.writeText(sessionLink).then(() => {
      this.showNotificationMessage('Session link copied! Share it to access your questions from anywhere.', 'success');
    }).catch(err => {
      console.error('Failed to copy link:', err);
      this.showNotificationMessage('Failed to copy link', 'error');
    });
  }

  // Get count of answered questions (from current page)
  get answeredCount(): number {
    return this.questionsHistory.filter(q => q.is_answered).length;
  }

  // Get count of pending questions (from current page)
  get pendingCount(): number {
    return this.questionsHistory.filter(q => !q.is_answered).length;
  }

  // Format date for display
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

  // Truncate text for preview
  truncateText(text: string, maxLength: number = 100): string {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }

  // Save email to localStorage when user types (prevents losing it if browser closes)
  onEmailInput(): void {
    if (this.email.trim()) {
      localStorage.setItem('amaUserEmail', this.email.trim());
    }
  }
}
