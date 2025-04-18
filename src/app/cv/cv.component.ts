import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  standalone: false,
  
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {
  experience = [
    {
      period: 'August 2023 - February 2024',
      company: 'Ponta IT',
      position: 'Internship',
      description: 'Spring backend development and RubyMine plugin development',
      achievements: [
        'Developed a REST API using Spring Boot and Hibernate/PostgreSQL',
        'Developed a RubyMine plugin with its own directory structure tree',
        'Collaborated with the team using Git, Trello and CircleCI',
          'Written multiple articles on Web Development thematics'
      ]
    }
  ];

  education = [
    {
      period: '2020 - 2024 (recent graduation)',
      institution: 'PANS Nysa, Poland',
      degree: 'Bachelor of Engineering, Information Technology',
      description: ''
    },
    {
      period: '2015 - 2019',
      institution: 'ZSiPO Nysa, Poland',
      degree: 'IT Technician / Computer Specialist',
      description: ''
    },
    {
      period: '2012 - 2015',
      institution: 'Junior High School Korfantow, Poland',
      degree: 'Junior Class participant',
      description: ''
    }
  ];

  skills = [
    {
      name: 'Languages',
      items: ['Java', 'Go', 'TypeScript', 'JavaScript','PHP' , 'C#' ,"C++", 'AutoIt', 'AutoHotkey']
    },
    {
      name: 'Backend',
      items: ['Spring', 'Hibernate', 'Gin', 'GORM', 'Laravel', '.NET', 'Entity Framework']
    },
    {
      name: 'Frontend',
      items: ['Angular','Tailwind CSS', 'Bootstrap', "Flowbite", 'DaisyUI','HTML', 'CSS',]
    },

    {
      name: 'Database',
      items: ['PostgreSQL', 'mySQL', 'MS SQL']
    },

    {
      name: 'Tools & Methods & Computing',
      items: ['Git', 'CircleCI', 'bash', 'Trello', 'Agile', 'Scrum','Docker', 'Fly.io', 'GraalVM']
    },
    {
      name: 'My workspace',
      items: ['JetBrains IDEs', 'VS Code', 'VS 2019/2022','Windows',]
    },
  ];

  certs = [
    {
      period: 'December 2023',
      name: 'CCNA R&S: Networks Intermediate'
    },
    {
      period: 'July 2019',
      name: 'E14 - Web and Database development'
    },
    {
      period: 'July 2018',
      name: 'E13 - Networks administration'
    },
    {
      period: 'July 2017',
      name: 'E12 - Hardware maintenance'
    },
    {
      period: 'June 2017',
      name: 'Cisco - IT Essentials'
    },
    {
      period: 'December 2016',
      name: 'CCNA R&S: Networks'
    },
  ];


  // Logos mapped to technology names
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
  };





awards = [
    {
      period: 'September 2014',
      name: 'Sports Scholarship - Korfantow High School'
    },
    {
      period: 'September 2012, September 2013',
      name: 'Sports Scholarship - Junior School'
    },
    {
      period: 'September 2010, September 2011',
      name: 'Academic Scholarship - Junior School'
    },
  ];

  other = [
    {
      period: '2016 - 2024',
      name: 'Challenger rank placement in League of Legends',
      link: 'https://www.redbull.com/int-en/league-of-legends-ranked-system-explained'
    },
    {
      period: 'October 2015',
      name: '1st place and provincial record in the Olympic relay',
      link: 'https://korfantow.pl/3511/2645/mistrzostw-wojewodztwa-lzs-w-lekkiej-atletyce.html'
    },
    {
      period: 'April 2011',
      name: '1st place in 200m, 60m and relay competitions',
      link: 'https://docs.google.com/document/d/14ridoW2C1SaFjfzPASsF29KNsgDHZu0m/edit?usp=sharing&ouid=115223096533221648775&rtpof=true&sd=true'
    },
    {
      period: '2014-2018',
      name: 'Participation in a junior local football team LNP rankings',
      link: 'https://www.laczynaspilka.pl/'
    },
    {
      period: 'October 2011',
      name: '2nd place in a Junior regional math contest',
      link: ''
    },
    {
      period: 'April 2010',
      name: '1st place in provincial painting contest - Opole',
      link: ''
    },

  ];


}
