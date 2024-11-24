import { Component } from '@angular/core';

@Component({
  selector: 'app-luckytap',
  standalone: false,
  
  templateUrl: './luckytap.component.html',
  styleUrl: './luckytap.component.css'
})
export class LuckytapComponent {

  features = [
    {
      title: 'XRP Wallet integration:',
      description: 'users can securely deposit and withdraw XRP tokens directly.',
    },
    {
      title: 'Provably fair gaming:',
      description: 'implements cryptographic fairness to ensure transparent and verifiable game outcomes.',
    },
    {
      title: 'High-Performance tapping game:',
      description: 'designed for seamless handling of large-scale user interactions in real-time.',
    },
    {
      title: 'Reward systems:',
      description: 'users can claim rewards based on their gameplay or participation in contests.',
    },
    {
      title: 'Social features:',
      description: 'includes user profiles, chat systems, tipping, and contest leaderboards.',
    },
    {
      title: 'Two-Factor authentication:',
      description: 'enhances account security for users.',
    },
    {
      title: 'Real-time notifications and updates:',
      description: 'users can receive notifications and updates for contests/rewards in real-time.',
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
  };


  skills = [
    {
      items: ['Go', 'GORM', 'Gin', 'TypeScript', 'Angular', 'PostgreSQL', 'Tailwind CSS', 'DaisyUI', 'Flowbite', 'Docker', 'Git', 'Fly.io', 'XRP Ledger', 'Metamask SNAP'],
    },
  ];

}
