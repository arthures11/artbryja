import { Component } from '@angular/core';

@Component({
  selector: 'app-classes',
  standalone: false,
  
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent {
  features = [
    {
      title: 'User management: ',
      description: 'teacher-controlled account creation, student class assignment system, role-based access control (Teachers/Students).',
    },
    {
      title: 'Question bank system: ',
      description: 'teachers can create and maintain question database in multiple choice question format, categorized question storage',
    },
    {
      title: 'Test management: ',
      description: 'custom test creation from question bank, class-specific test assignment, randomized question order and multiple choice answer shuffling',
    },
    {
      title: 'Assessment system',
      description: 'automated test scoring with individual student progress tracking.',
    },
    {
      title: 'Student features',
      description: 'personal test dashboard, real-time test taking interface with immediate feedback after completion and historical test result access.',
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
      items: ['PHP', 'Laravel', 'mySQL', 'PostgreSQL', 'Bootstrap'],
    },
  ];

}
