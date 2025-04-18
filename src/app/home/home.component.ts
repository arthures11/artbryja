import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ScrollStateService} from '../scroll-state.service';
import {After} from "node:v8";
import {Router} from "@angular/router";
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, HeroComponent],
    template: `
        <app-hero></app-hero>
        <!-- Add more sections here -->
    `,
    styles: []
})
export class HomeComponent implements AfterViewInit, OnDestroy{

    constructor(private scrollState: ScrollStateService, private router: Router) {
    }

    featuredProjects = [
        {
            title: 'Luckytap',
            role: 'Founder & Fullstack Developer',
            type: 'Commercial',
            year: '2024',
            description: 'A web crypto-currency based mini game built with Go and Angular.',
            technologies: [
                {name: 'GO+Gin+GORM', icon: 'assets/images/go-ico.svg'},
                {name: 'Typescript', icon: 'assets/images/ts-ico.svg'},
                {name: 'Angular', icon: 'assets/images/angular-ico.svg'},
                {name: 'PostgreSQL', icon: 'assets/images/postgres-ico.svg'},
                {name: 'TailwindCSS', icon: 'assets/images/tailwind-ico.svg'},
                {name: 'DaisyUI', icon: 'assets/images/daisy-ico.svg'},
                {name: 'Flowbite', icon: 'assets/images/flowbite-ico.svg'},
                {name: 'Docker', icon: 'assets/images/docker-ico.svg'},
                {name: 'Git', icon: 'assets/images/git-ico.svg'},
                {name: 'Fly.io', icon: 'assets/images/flyio-ico.svg'},
                {name: 'XRP Ledger', icon: 'assets/images/ripple-ico.svg'},
                {name: 'Metamask SNAP', icon: 'assets/images/metamask-ico.svg'},
            ],
            image: 'assets/images/luckytap-main-large.png',
            link: '/luckytap'
        },
    ];

    // technologies = [
    //   'Angular',
    //   'TypeScript',
    //   'JavaScript',
    //   'HTML/CSS',
    //   'Tailwind CSS',
    //   'Git',
    //   'Node.js',
    //   'MongoDB'
    // ];

    selectedType: string = 'Commercial';
    filteredProjects = this.featuredProjects.filter(
        project => project.type === this.selectedType
    );

    observer: IntersectionObserver | undefined;

    ngOnDestroy() {
        this.observer?.disconnect()
    }

    ngAfterViewInit() {

        const target = document.getElementById('living-location');
        if (!target) return;

        setTimeout(() => {
            this.observer = new IntersectionObserver(
                ([entry]) => {
                    this.scrollState.setShowAvatar(!entry.isIntersecting);
                },
                { threshold: 1.0 }
            );

            this.observer.observe(target);
        }, 100);
        if (this.router.url === '/#contact') return;
        this.scrollState.setShowAvatar(false);
    }

    toggleProjectType() {
        this.selectedType = this.selectedType === 'Commercial' ? 'Educational' : 'Commercial';
        this.filterProjects();
    }

    switchProjectType(type: string) {
        this.selectedType = type;
        this.filterProjects();
    }

    filterProjects() {
        this.filteredProjects = this.featuredProjects.filter(
            project => project.type === this.selectedType
        );
    }

    performActionAfterScroll(): void {
        this.scrollState.setShowAvatar(false);
    }
}
