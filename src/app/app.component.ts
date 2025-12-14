import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {filter, map, mergeMap} from 'rxjs/operators';
import {ScrollStateService} from "./scroll-state.service";


declare global {
  interface Window { dataLayer?: any[] }
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false,
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
    constructor(private router: Router, private titleService: Title, private scrollState: ScrollStateService) {
    }

    ngOnInit(): void {
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

    onRouteChange() {
        let isHomePage = this.router.url === '/';
        if (!isHomePage) {
            this.scrollState.setShowAvatar(true)
            return
        }
    }
}
