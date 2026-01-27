import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {filter, map, mergeMap} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {ScrollStateService} from "./scroll-state.service";
import {AmaService, WebSocketMessage} from "./ama/ama.service";


declare global {
  interface Window { dataLayer?: any[] }
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false,
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
    private userId: string = '';
    private wsSubscription: Subscription | null = null;
    private notificationPermission: NotificationPermission = 'default';
    private isWebSocketConnected: boolean = false;

    constructor(
        private router: Router,
        private titleService: Title,
        private scrollState: ScrollStateService,
        private amaService: AmaService
    ) {
    }

    ngOnInit(): void {
        // Initialize user session
        this.initializeUserSession();

        // Request notification permission
        this.requestNotificationPermission();

        // WebSocket will be connected when first visiting AMA page
        // Then stays connected globally for notifications

        localStorage.setItem('theme', 'dark');
        document.documentElement.classList.toggle('dark', true);
        document.documentElement.classList.toggle(
            'dark',
            localStorage['theme'] === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        );
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.onRouteChange();
            }
        });
        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd), // Only process navigation end events
                map(() => this.router.routerState.root), // Start with the root route
                map(route => {
                    while (route.firstChild) route = route.firstChild; // Get to the deepest child route
                    return route;
                }),
                mergeMap(route => route.data) // Get the `data` from the deepest route
            )
            .subscribe(data => {
                if (data['title']) {
                    this.titleService.setTitle(data['title']);
                }
            });

      // GA/GTM pageview push on SPA navigation
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((e: NavigationEnd) => {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'page_view',
            page_path: e.urlAfterRedirects,
            page_title: document.title,
            page_location: location.href
          });
        });
    }


    ngOnDestroy(): void {
        // Clean up WebSocket connection
        if (this.wsSubscription) {
            this.wsSubscription.unsubscribe();
        }
        this.amaService.disconnectWebSocket();
        this.isWebSocketConnected = false;
    }

    onRouteChange() {
        const isAMAPage = this.router.url.includes('/ama');
        const isHomePage = this.router.url === '/';

        // Connect WebSocket when first visiting AMA page
        // Once connected, it stays connected globally for notifications
        if (isAMAPage && !this.isWebSocketConnected) {
            console.log('First visit to AMA page - connecting WebSocket globally');
            this.setupGlobalWebSocket();
        }

        if (!isHomePage) {
            this.scrollState.setShowAvatar(true)
            return
        }
    }

    private initializeUserSession(): void {
        // Check if user has existing session ID in localStorage
        const storedUserId = localStorage.getItem('amaUserId');

        // If no existing session, generate new unique user ID and store in localStorage
        if (!storedUserId) {
            this.userId = this.generateUserId();
            localStorage.setItem('amaUserId', this.userId);
        } else {
            this.userId = storedUserId;
        }

        // Check if there's a user ID in URL for sharing
        const urlParams = new URLSearchParams(window.location.search);
        const sharedUserId = urlParams.get('uid');
        if (sharedUserId) {
            this.userId = sharedUserId;
            localStorage.setItem('amaUserId', this.userId);
        }
    }

    private generateUserId(): string {
        // Generate unique user/session identifier using timestamp and random string
        const timestamp = Date.now().toString(36);
        const randomStr = Math.random().toString(36).substring(2, 8);
        return timestamp + randomStr;
    }

    private requestNotificationPermission(): void {
        if ('Notification' in window) {
            Notification.requestPermission().then(permission => {
                this.notificationPermission = permission;
                console.log('Notification permission:', permission);
            });
        }
    }

    private setupGlobalWebSocket(): void {
        // Prevent multiple WebSocket connections
        if (this.isWebSocketConnected || !this.userId) {
            return;
        }

        console.log('Setting up global WebSocket connection for user:', this.userId);
        this.isWebSocketConnected = true;

        this.wsSubscription = this.amaService.connectWebSocket(this.userId).subscribe({
            next: (message: WebSocketMessage) => {
                this.handleGlobalWebSocketMessage(message);
            },
            error: (error) => {
                console.error('Global WebSocket error:', error);
                this.isWebSocketConnected = false;
            },
            complete: () => {
                console.log('Global WebSocket connection completed');
                this.isWebSocketConnected = false;
            }
        });
    }

    private disconnectWebSocket(): void {
        if (this.wsSubscription) {
            this.wsSubscription.unsubscribe();
            this.wsSubscription = null;
        }
        this.amaService.disconnectWebSocket();
        this.isWebSocketConnected = false;
        console.log('WebSocket disconnected - left AMA page');
    }

    private handleGlobalWebSocketMessage(message: WebSocketMessage): void {
        switch (message.type) {
            case 'answer_received':
                this.showAnswerNotification(message.payload);
                break;
            case 'pong':
                // Heartbeat response
                console.log('Global WebSocket heartbeat received');
                break;
            default:
                console.log('Unknown global WebSocket message type:', message.type);
        }
    }

    private showAnswerNotification(questionData: any): void {
        const title = 'Question Answered! 🎉';
        const body = 'Your question has been answered. Check your AMA page for the response!';

        // Show browser notification if permission granted
        if (this.notificationPermission === 'granted' && 'Notification' in window) {
            const notification = new Notification(title, {
                body: body,
                icon: '/favicon.ico', // You can add a custom icon
                badge: '/favicon.ico',
                tag: 'ama-answer', // Prevents duplicate notifications
                requireInteraction: false,
                silent: false
            });

            // Auto-close after 5 seconds
            setTimeout(() => {
                notification.close();
            }, 5000);

            // Click handler to navigate to AMA page
            notification.onclick = () => {
                window.focus();
                this.router.navigate(['/ama']);
                notification.close();
            };
        }

        // Show in-app notification (global toast)
        this.showGlobalToast('Your question has been answered!', 'success');
    }

    private showGlobalToast(message: string, type: 'success' | 'error' = 'success'): void {
        // Create a global toast notification that appears anywhere on the site
        const toast = document.createElement('div');
        toast.className = `fixed top-20 right-4 z-50 rounded-lg p-4 shadow-lg transition-all duration-300 ${
            type === 'success'
                ? 'bg-green-900 border border-green-700'
                : 'bg-red-900 border border-red-700'
        }`;
        toast.innerHTML = `
            <div class="flex items-center gap-3">
                <span class="${type === 'success' ? 'text-green-400' : 'text-red-400'} text-lg">
                    ${type === 'success' ? '✓' : '✕'}
                </span>
                <span class="text-gray-300">${message}</span>
            </div>
        `;

        document.body.appendChild(toast);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 5000);
    }
}
