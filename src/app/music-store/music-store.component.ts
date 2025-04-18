import { Component } from '@angular/core';

@Component({
  selector: 'app-music-store',
  standalone: false,

  templateUrl: './music-store.component.html',
  styleUrl: './music-store.component.css'
})
export class MusicStoreComponent {

  features = [
    {
      "title": "Dual API Endpoints",
      "description": "Supports both RESTful and GraphQL APIs for fetching track data, allowing flexible data access and comparison."
    },
    {
      "title": "Database Interaction",
      "description": "Connects to an SQLite database using SQLAlchemy ORM for querying joined tables like Tracks, Albums, Artists, and Genres."
    },
    {
      "title": "Caching with Redis",
      "description": "Reduces DB load by caching API responses using Redis with a smart TTL strategy for high performance."
    },
    {
      "title": "Real-time Filtering",
      "description": "Instantly filter tracks by name with dynamic updates, powered by both REST and GraphQL sources."
    },
    {
      "title": "Feature Modules & Lazy Loading",
      "description": "Optimizes load time by splitting the app into lazy-loaded Angular modules."
    },
    {
      "title": "State Management with NgRx",
      "description": "Robust and scalable frontend state using NgRx Store, Effects, Reducers, Selectors, and GraphQL Apollo Client cache."
    },
    {
      "title": "JWT Authentication",
      "description": "Secures REST and GraphQL endpoints using JSON Web Tokens. Includes login/logout and token storage on the client."
    },
    {
      "title": "Responsive Design",
      "description": "Built with Tailwind for a clean, responsive UI. Includes search term highlighting and text truncation with hover reveal."
    },
    {
      "title": "Automated Testing",
      "description": "Includes unit tests (Jasmine, Pytest) and end-to-end tests (Cypress) to validate workflows and logic."
    },
    {
      "title": "CI/CD Integration",
      "description": "GitHub Actions run linters, unit tests, and E2E tests automatically on every commit or PR for both frontend and backend."
    }
  ]
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
    'Python': 'assets/images/python-ico.svg',
    'FastAPI': 'assets/images/fastapi-ico.svg',
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
    'SQLite': 'assets/images/sqlite-ico.svg',
  };


  skills = [
    {
      items: ['Python', 'FastAPI', 'Angular', 'TypeScript', 'Tailwind CSS', 'SQLite', 'Git', 'Docker' ],
    },
  ];

}
