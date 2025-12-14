import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-projects',
    standalone: false,

    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
    ngOnInit() {
        const storedType = localStorage.getItem('projectType');
        this.selectedType = storedType ? storedType : 'Commercial';

        if (storedType) {
            this.selectedType = storedType;
            this.filterProjects();
        }
    }

    featuredProjects = [
        {
            title: 'Copilot',
            role: 'Junior/Mid Software Engineer',
            type: 'Commercial',
            year: '2024-2025',
            description: 'Internal AI-powered chat application.',
            technologies: [
                {name: 'FastAPI', icon: 'assets/images/fastapi-ico.svg'},
                {name: 'Python', icon: 'assets/images/python-ico.svg'},
                {name: 'Typescript', icon: 'assets/images/ts-ico.svg'},
                {name: 'Angular', icon: 'assets/images/angular-ico.svg'},
                {name: 'JavaScript', icon: 'assets/images/js-ico.svg'},
                {name: 'HTML', icon: 'assets/images/html-ico.svg'},
                {name: 'Figma', icon: 'assets/images/figma-ico.svg'},
                {name: 'TailwindCSS', icon: 'assets/images/tailwind-ico.svg'},
                {name: 'PostgreSQL', icon: 'assets/images/postgres-ico.svg'},
                {name: 'Git', icon: 'assets/images/git-ico.svg'},
                {name: 'Jira', icon: 'assets/images/jira-ico.svg'},
            ],
            image: 'assets/images/pgd-copilot-theme.png',
            link: '/pgd-copilot'
        },
        {
            title: 'Luckytap',
            role: 'Founder & Software Engineer',
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
            image: 'assets/images/luckytap-main.png',
            link: '/luckytap'
        },
        {
            title: 'Trucky',
            role: 'Software Engineer',
            type: 'Commercial',
            year: '2024',
            description: 'A CRUD web application that manages logistics, forwarding and transporting company.',
            technologies: [
                {name: 'Spring', icon: 'assets/images/spring-ico.svg'},
                {name: 'JavaScript', icon: 'assets/images/js-ico.svg'},
                {name: 'PostgreSQL', icon: 'assets/images/postgres-ico.svg'},
                {name: 'Hibernate', icon: 'assets/images/hibernate-ico.svg'},
                {name: 'Bootstrap', icon: 'assets/images/bootstrap-ico.svg'},
                {name: 'jQuery', icon: 'assets/images/jquery-ico.svg'},
                {name: 'HTML', icon: 'assets/images/html-ico.svg'},
                {name: 'CSS', icon: 'assets/images/css-ico.svg'},


                // { name: 'Firebase', icon: 'firebase-icon-path' },
                // { name: 'Tailwind', icon: 'tailwind-icon-path' }
            ],
            image: 'assets/images/trucky-main.png',
            link: '/trucky'
        },
        {
            title: 'Music-Store',
            role: 'Fullstack Developer',
            type: 'Educational',
            year: '2025',
            description: 'A simple project that showcases the development of a modern, full-stack web application.',
            technologies: [
                {name: 'Python', icon: 'assets/images/python-ico.svg'},
                {name: 'FastAPI', icon: 'assets/images/fastapi-ico.svg'},
                {name: 'Angular', icon: 'assets/images/angular-ico.svg'},
                {name: 'TypeScript', icon: 'assets/images/ts-ico.svg'},
                {name: 'Tailwind CSS', icon: 'assets/images/tailwind-ico.svg'},
                {name: 'SQLite', icon: 'assets/images/sqlite-ico.svg'},
                {name: 'Git', icon: 'assets/images/git-ico.svg'},
                {name: 'Docker', icon: 'assets/images/docker-ico.svg'},


                // { name: 'Firebase', icon: 'firebase-icon-path' },
                // { name: 'Tailwind', icon: 'tailwind-icon-path' }
            ],
            image: 'assets/images/music-store-full.png',
            link: '/music-store'
        },
        {
            title: 'WebDevDemo',
            role: 'Fullstack Developer',
            type: 'Educational',
            year: '2025',
            description: 'Demonstration of modern web development concepts, tools, and best practices.',
            technologies: [
                {name: 'React', icon: 'assets/images/react-ico.svg'},
                {name: 'TypeScript', icon: 'assets/images/ts-ico.svg'},
                {name: 'JavaScript', icon: 'assets/images/js-ico.svg'},
                {name: 'CSS', icon: 'assets/images/css-ico.svg'},
                {name: 'HTML', icon: 'assets/images/html-ico.svg'},
                {name: 'Tailwind CSS', icon: 'assets/images/tailwind-ico.svg'},
                {name: 'Git', icon: 'assets/images/git-ico.svg'},
                {name: 'Docker', icon: 'assets/images/docker-ico.svg'},


                // { name: 'Firebase', icon: 'firebase-icon-path' },
                // { name: 'Tailwind', icon: 'tailwind-icon-path' }
            ],
            image: 'assets/images/react-tech-full.png',
            link: '/react-mastery-tech'
        },
        {
            title: 'Casino',
            role: 'Fullstack Developer',
            type: 'Educational',
            year: '2023',
            description: 'An online casino system with inbuilt three games.',
            technologies: [
                {name: 'Spring', icon: 'assets/images/spring-ico.svg'},
                {name: 'JavaScript', icon: 'assets/images/js-ico.svg'},
                {name: 'PostgreSQL', icon: 'assets/images/postgres-ico.svg'},
                {name: 'Hibernate', icon: 'assets/images/hibernate-ico.svg'},
                {name: 'Bootstrap', icon: 'assets/images/bootstrap-ico.svg'},
                {name: 'jQuery', icon: 'assets/images/jquery-ico.svg'},
                {name: 'HTML', icon: 'assets/images/html-ico.svg'},
                {name: 'CSS', icon: 'assets/images/css-ico.svg'},


                // { name: 'Firebase', icon: 'firebase-icon-path' },
                // { name: 'Tailwind', icon: 'tailwind-icon-path' }
            ],
            image: 'assets/images/casino-login-dice.png',
            link: '/casino'
        },
        {
            title: 'Kernel Mouse mini-driver',
            role: 'Developer',
            type: 'Educational',
            year: '2023',
            description: 'A mini-driver that allows for mouse movement without the necessity of using regular APIs (allows bypassing apps blocking SetCursorPos and more).',
            technologies: [
                {name: 'C++', icon: 'assets/images/cpp-ico.svg'},
                {name: 'C', icon: 'assets/images/c-ico.svg'},
                {name: 'Assembly', icon: 'assets/images/assembly-ico.svg'},
                {name: 'Windows Driver Kit', icon: 'assets/images/windows-ico.svg'},


                // { name: 'Firebase', icon: 'firebase-icon-path' },
                // { name: 'Tailwind', icon: 'tailwind-icon-path' }
            ],
            image: 'assets/images/kernel-stack.full.png',
            link: '/kernel-mouse-driver'
        },
        {
            title: 'Classes',
            role: 'Fullstack Developer',
            type: 'Educational',
            year: '2023',
            description: 'A CRUD web application that manages classes and allows teachers to create tests for their students.',
            technologies: [
                {name: 'PHP', icon: 'assets/images/php-ico.svg'},
                {name: 'Laravel', icon: 'assets/images/laravel-ico.svg'},
                {name: 'MySQL', icon: 'assets/images/mysql-ico.svg'},
                {name: 'PostgreSQL', icon: 'assets/images/postgres-ico.svg'},
                {name: 'Bootstrap', icon: 'assets/images/bootstrap-ico.svg'},


                // { name: 'Firebase', icon: 'firebase-icon-path' },
                // { name: 'Tailwind', icon: 'tailwind-icon-path' }
            ],
            image: 'assets/images/classes-questions.png',
            link: '/classes'
        },
        {
            title: 'More (public GitHub)',
            role: 'Author',
            type: 'Educational',
            year: '2019-2025',
            description: 'Some of my hobby projects can be found on my GitHub.',
            technologies: [


                // { name: 'Firebase', icon: 'firebase-icon-path' },
                // { name: 'Tailwind', icon: 'tailwind-icon-path' }
            ],
            image: 'assets/images/github-arthures11.png',
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
        localStorage.setItem('projectType', this.selectedType);
        this.filterProjects();
    }


    filterProjects() {
        this.filteredProjects = this.featuredProjects.filter(
            project => project.type === this.selectedType
        );
    }
}
