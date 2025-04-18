import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute inset-0 bg-[url('/assets/images/hero-pattern.svg')] opacity-10"></div>
      </div>
      
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            <span class="block">Hi, I'm Artur Bryja</span>
            <span class="block text-blue-400">Full Stack Developer</span>
          </h1>
          
          <p class="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            I build exceptional digital experiences with modern technologies.
            Focused on creating clean, efficient, and scalable solutions.
          </p>
          
          <div class="mt-10 flex justify-center gap-4">
            <a href="/projects" 
               class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
              View My Work
            </a>
            <a href="/contact" 
               class="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-white hover:bg-gray-700 transition-colors duration-300">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class HeroComponent {} 