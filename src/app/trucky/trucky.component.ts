import { Component } from '@angular/core';

@Component({
  selector: 'app-trucky',
  standalone: false,
  
  templateUrl: './trucky.component.html',
  styleUrl: './trucky.component.css'
})
export class TruckyComponent {
  features = [
    {
      title: '',
      description: 'Centralized account management for company-employed drivers and independent subcontractors.',
    },
    {
      title: '',
      description: 'Real-time tracking and reporting of driver\'s work schedules, ensuring compliance with applicable legal regulations.',
    },
    {
      title: '',
      description: 'Tools for creating, approving, and analyzing driver schedules.',
    },
    {
      title: '',
      description: 'Assignment and reconciliation of individual tasks, ensuring accountability.',
    },
    {
      title: '',
      description: 'Real-time monitoring of vehicles to track their location and performance.',
    },
    {
      title: '',
      description: 'Efficient management of vehicle assignments to specific drivers and tasks.',
    },
    {
      title: '',
      description: 'Dedicated messaging features for seamless communication between everyone.',
    },
    {
      title: '',
      description: 'Automated analysis and reconciliation of driver\'s actual working hours.',
    },
    {
      title: '',
      description: 'Integration with legal compliance requirements for labor laws and operational standards.',
    },
    {
      title: '',
      description: 'Device-specific interfaces tailored for desktop and mobile use, ensuring accessibility and usability for all user groups.',
    },
    {
      title: '',
      description: 'A centralized notification system to coordinate actions between dispatchers, owners, and drivers.',
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
      items: ['Spring', 'JavaScript', 'PostgreSQL', 'Hibernate', 'Bootstrap', 'HTML', 'CSS'],
    },
  ];

}
