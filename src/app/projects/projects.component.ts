import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    featuredProjects = [
        {
            title: 'Luckytap',
            role: 'Founder & Fullstack Developer',
            type: 'Commercial',
            year: '2024',
            description: 'A web crypto-currency based mini game built with Go and Angular.',
            technologies: [
                { name: 'GO+Gin+GORM', icon: 'assets/images/go-ico.svg' },
                { name: 'Typescript', icon: 'assets/images/ts-ico.svg' },
                { name: 'Angular', icon: 'assets/images/angular-ico.svg' },
                { name: 'PostgreSQL', icon: 'assets/images/postgres-ico.svg' },
                { name: 'TailwindCSS', icon: 'assets/images/tailwind-ico.svg' },
                { name: 'DaisyUI', icon: 'assets/images/daisy-ico.svg' },
                { name: 'Flowbite', icon: 'assets/images/flowbite-ico.svg' },
                { name: 'Docker', icon: 'assets/images/docker-ico.svg' },
                { name: 'Git', icon: 'assets/images/git-ico.svg' },
                { name: 'Fly.io', icon: 'assets/images/flyio-ico.svg' },
                { name: 'XRP Ledger', icon: 'assets/images/ripple-ico.svg' },
                { name: 'Metamask SNAP', icon: 'assets/images/metamask-ico.svg' },
            ],
            image: '/assets/images/luckytap-main.png',
            link: '/luckytap'
        },
        {
            title: 'Trucky',
            role: 'Fullstack Developer',
            type: 'Commercial',
            year: '2024',
            description: 'A CRUD web application that manages logistics, forwarding and transporting company.',
            technologies: [
                { name: 'Spring', icon: 'assets/images/spring-ico.svg' },
                { name: 'JavaScript', icon: 'assets/images/js-ico.svg' },
                { name: 'PostgreSQL', icon: 'assets/images/postgres-ico.svg' },
                { name: 'Hibernate', icon: 'assets/images/hibernate-ico.svg' },
                { name: 'Bootstrap', icon: 'assets/images/bootstrap-ico.svg' },
                { name: 'HTML', icon: 'assets/images/html-ico.svg' },
                { name: 'CSS', icon: 'assets/images/css-ico.svg' },




                // { name: 'Firebase', icon: 'firebase-icon-path' },
                // { name: 'Tailwind', icon: 'tailwind-icon-path' }
            ],
            image: '/assets/images/trucky-main.png',
            link: '/trucky'
        },
        {
            title: 'Casino',
            role: 'Fullstack Developer',
            type: 'Educational',
            year: '2023',
            description: 'An online casino system with inbuilt three games.',
            technologies: [
                { name: 'Spring', icon: 'assets/images/spring-ico.svg' },
                { name: 'JavaScript', icon: 'assets/images/js-ico.svg' },
                { name: 'PostgreSQL', icon: 'assets/images/postgres-ico.svg' },
                { name: 'Hibernate', icon: 'assets/images/hibernate-ico.svg' },
                { name: 'Bootstrap', icon: 'assets/images/bootstrap-ico.svg' },
                { name: 'HTML', icon: 'assets/images/html-ico.svg' },
                { name: 'CSS', icon: 'assets/images/css-ico.svg' },


                // { name: 'Firebase', icon: 'firebase-icon-path' },
                // { name: 'Tailwind', icon: 'tailwind-icon-path' }
            ],
            image: '/assets/images/casino-login-dice.png',
            link: '/casino'
        },
        {
            title: 'Classes',
            role: 'Fullstack Developer',
            type: 'Educational',
            year: '2023',
            description: 'A CRUD web application that manages classes and allows teachers to create tests for their students.',
            technologies: [
                { name: 'PHP', icon: 'assets/images/php-ico.svg' },
                { name: 'Laravel', icon: 'assets/images/laravel-ico.svg' },
                { name: 'MySQL', icon: 'assets/images/mysql-ico.svg' },
                { name: 'PostgreSQL', icon: 'assets/images/postgres-ico.svg' },
                { name: 'Bootstrap', icon: 'assets/images/bootstrap-ico.svg' },


                // { name: 'Firebase', icon: 'firebase-icon-path' },
                // { name: 'Tailwind', icon: 'tailwind-icon-path' }
            ],
            image: '/assets/images/classes-questions.png',
            link: '/classes'
        },
        {
            title: 'More',
            role: '',
            type: 'Educational',
            year: '',
            description: 'More projects can be found on my GitHub.',
            technologies: [



                // { name: 'Firebase', icon: 'firebase-icon-path' },
                // { name: 'Tailwind', icon: 'tailwind-icon-path' }
            ],
            image: '/assets/images/github-arthures11.png',
            link: 'https://github.com/arthures11'
        },
    ];

    technologies = [
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML/CSS',
        'Tailwind CSS',
        'Git',
        'Node.js',
        'MongoDB'
    ];

    selectedType: string = 'Commercial';
    filteredProjects = this.featuredProjects.filter(
        project => project.type === this.selectedType
    );

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
}
