import {Component} from '@angular/core';

@Component({
    selector: 'app-pgd-copilot',
    standalone: false,

    templateUrl: './pgd-copilot.component.html',
    styleUrl: './pgd-copilot.component.css'
})
export class PgdCopilotComponent {
    features = [
        {
            title: 'AI-Driven Assistance',
            description: 'processing to interpret technicians’ queries and provide accurate, context-specific responses.',
        },
        {
            title: 'Secure Authentication',
            description: 'robust login security and role-based access control.',
        },
        {
            title: 'Real-Time Information',
            description: 'connects to the company’s internal knowledge base to instantly fetch resources.',
        },
        {
            title: 'Intuitive Interface',
            description: 'designed for ease of use across various devices, including on-site operations.',
        },
        {
            title: 'Knowledge Integration',
            description: 'powered by a company-specific knowledge base, ensuring responses are relevant and precise.',
        },
        {
            title: '',
            description: 'many more...',
        },

    ];
    logos: { [key: string]: string } = {
        'Java': 'assets/images/java-ico.svg',
        'Go': 'assets/images/go-ico.svg',
        'TypeScript': 'assets/images/ts-ico.svg',
        'Python': 'assets/images/python-ico.svg',
        'JavaScript': 'assets/images/js-ico.svg',
        'PHP': 'assets/images/php-ico.svg',
        'C#': 'assets/images/cs-ico.svg',
        'C++': 'assets/images/cpp-ico.svg',
        'AutoIt': 'assets/images/autoit-ico.svg',
        'AutoHotkey': 'assets/images/ahk-ico.svg',
        'Spring': 'assets/images/spring-ico.svg',
        'Hibernate': 'assets/images/hibernate-ico.svg',
        'Gin': 'assets/images/gin-ico.svg',
        'GORM': 'assets/images/gorm-ico.svg',
        'FastAPI': 'assets/images/fastapi-ico.svg',
        'SQL Alchemy': 'assets/images/sqlalchemy-ico.svg',
        'Laravel': 'assets/images/laravel-ico.svg',
        '.NET': 'assets/images/dotnet-ico.svg',
        'Entity Framework': 'assets/images/entity-ico.svg',
        'PostgreSQL': 'assets/images/postgres-ico.svg',
        'SQLite': 'assets/images/sqlite-ico.svg',
        'mySQL': 'assets/images/mysql-ico.svg',
        'MS SQL': 'assets/images/mssql-ico.svg',
        'Angular': 'assets/images/angular-ico.svg',
        'HTML': 'assets/images/html-ico.svg',
        'CSS': 'assets/images/css-ico.svg',
        'Tailwind CSS': 'assets/images/tailwind-ico.svg',
        'Bootstrap': 'assets/images/bootstrap-ico.svg',
        'Flowbite': 'assets/images/flowbite-ico.svg',
        'DaisyUI': 'assets/images/daisy-ico.svg',
        'Git': 'assets/images/git-ico.svg',
        'CircleCI': 'assets/images/circleci-ico.svg',
        'bash': 'assets/images/bash-ico.svg',
        'Trello': 'assets/images/trello-ico.svg',
        'Jira': 'assets/images/jira-ico.svg',
        'Agile': 'assets/images/agile-ico.svg',
        'Scrum': 'assets/images/agile-ico.svg',
        'Docker': 'assets/images/docker-ico.svg',
        'Fly.io': 'assets/images/flyio-ico.svg',
        'GraalVM': 'assets/images/graal-ico.svg',
        'JetBrains IDEs': 'assets/images/jetbrains-ico.svg',
        'macOS': 'assets/images/apple-ico.svg',
        'Windows': 'assets/images/windows-ico.svg',
        'VS Code': 'assets/images/vscode-ico.svg',
        'VS 2019/2022': 'assets/images/vs-ico.svg',
        'jQuery': 'assets/images/jquery-ico.svg',
        'Figma': 'assets/images/figma-ico.svg',
    };


    skills = [
        {
            items: ['FastAPI', 'Python', 'Angular', 'TypeScript', 'JavaScript', 'HTML', 'Figma', 'Tailwind CSS', 'PostgreSQL', 'Git', 'Jira'],
        },
    ];


    selectedPhoto: string | null = null;

    pgdCop1 = 'assets/images/pgdcop1.png';
    pgdCop2 = 'assets/images/pgdcop2.png';

    openPhoto(photo: string) {
        const isMobileDevice = window.innerWidth <= 768;
        if (isMobileDevice) {
            this.showMobileNotification();
            return;
        }

        this.selectedPhoto = photo;
        const modal = document.getElementById('enlarge-pgd') as HTMLDialogElement;
        modal.showModal();
    }

    closeModal() {
        const modal = document.getElementById('enlarge-pgd') as HTMLDialogElement;
        modal.close();
        this.selectedPhoto = null;
    }

    private showMobileNotification() {
        const existingNotifications = document.querySelectorAll('.mobile-notification');
        existingNotifications.forEach(el => el.remove());

        const toast = document.createElement('div');

        toast.className = `
    mobile-notification 
    fixed 
    z-[1000] 
    inset-0 
    flex 
    items-center 
    justify-center 
    pointer-events-none
  `;

        const toastContent = document.createElement('div');
        toastContent.className = `
    bg-orange-500 
    text-white 
    px-6 
    py-4 
    rounded-lg 
    shadow-2xl 
    text-center 
    w-[calc(100%-40px)] 
    max-w-md 
    mx-auto 
    animate-bounce 
    font-bold
  `;

        toastContent.textContent = 'Photo enlargement is not available on mobile devices. Try to zoom in.';

        toast.appendChild(toastContent);
        document.body.appendChild(toast);

        setTimeout(() => {
            toastContent.classList.add(
                'transition',
                'duration-500',
                'ease-in-out',
                'opacity-0',
                'scale-90'
            );

            setTimeout(() => {
                document.body.removeChild(toast);
            }, 500);
        }, 3000);
    }
}
