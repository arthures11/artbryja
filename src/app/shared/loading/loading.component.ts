import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  template: `
    <div class="animate-pulse space-y-4">
      <div class="h-4 bg-gray-700 rounded w-3/4"></div>
      <div class="space-y-2">
        <div class="h-4 bg-gray-700 rounded"></div>
        <div class="h-4 bg-gray-700 rounded w-5/6"></div>
      </div>
    </div>
  `,
  styles: []
})
export class LoadingComponent {} 