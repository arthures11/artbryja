import {Component} from '@angular/core';

@Component({
    selector: 'app-casino',
    standalone: false,

    templateUrl: './casino.component.html',
    styleUrl: './casino.component.css'
})
export class CasinoComponent {
    features = [
        {
            title: 'Dice',
            description: 'Players bet on over/under outcomes with customizable odds.',
        },
        {
            title: 'Roulette',
            description: 'Traditional number-based betting system.',
        },
        {
            title: 'Coinflip',
            description: 'Simple red/black betting game.',
        },
        {
            title: '',
            description: 'User account management with balance tracking.',
        },
        {
            title: '',
            description: 'Game history and statistics.',
        },
        {
            title: '',
            description: 'Real-time user activity monitoring.',
        },
        {
            title: '',
            description: 'Secure authentication system with social login support.',
        },
        {
            title: '',
            description: 'Bonus system with periodic rewards.',
        },
        {
            title: '',
            description: 'Multi-language chat system (English/German).',
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
        'Laravel': 'assets/images/laravel-ico.svg',
        '.NET': 'assets/images/dotnet-ico.svg',
        'Entity Framework': 'assets/images/entity-ico.svg',
        'PostgreSQL': 'assets/images/postgres-ico.svg',
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
        'Agile': 'assets/images/agile-ico.svg',
        'Scrum': 'assets/images/agile-ico.svg',
        'Docker': 'assets/images/docker-ico.svg',
        'Fly.io': 'assets/images/flyio-ico.svg',
        'GraalVM': 'assets/images/graal-ico.svg',
        'JetBrains IDEs': 'assets/images/jetbrains-ico.svg',
        'Windows': 'assets/images/windows-ico.svg',
        'VS Code': 'assets/images/vscode-ico.svg',
        'VS 2019/2022': 'assets/images/vs-ico.svg',
        'XRP Ledger': 'assets/images/ripple-ico.svg',
        'Metamask SNAP': 'assets/images/metamask-ico.svg',
        'jQuery': 'assets/images/jquery-ico.svg',
    };


    skills = [
        {
            items: ['Spring', 'JavaScript', 'PostgreSQL', 'Hibernate', 'Bootstrap', 'jQuery', 'HTML', 'CSS'],
        },
    ];

}
