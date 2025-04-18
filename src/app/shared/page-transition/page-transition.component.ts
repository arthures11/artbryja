import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-transition',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="'page-transition ' + (isLoading ? 'fade-out' : 'fade-in')">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .page-transition {
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }
    .fade-in {
      opacity: 1;
    }
    .fade-out {
      opacity: 0;
    }
  `]
})
export class PageTransitionComponent {
  @Input() isLoading = false;
} 