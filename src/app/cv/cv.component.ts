import {Component} from '@angular/core';

@Component({
    selector: 'app-cv',
    standalone: false,

    templateUrl: './cv.component.html',
    styleUrl: './cv.component.css'
})
export class CvComponent {
    experience = [

        {
            period: 'December 2023 - February 2024',
            company: 'Ponta IT',
            position: 'Intern/Junior Software Engineer',
            description: 'Back-end and front-end development',
            companyUrls: {},
            achievements: [
                'Designing, building, and scaling web applications using mainly Spring and PostgreSQL',
            ]
        },
        {
            period: 'July 2023 - September 2023',
            company: '',
            position: '',
            description: 'Back-end, front-end development and RubyMine plugin development',
            companyUrls: {},
            achievements: [
                'Developed a RubyMine plugin with its own directory structure tree',
            ]
        },
        {
            period: 'June 2022 - August 2022',
            company: '',
            position: '',
            description: 'Back-end development',
            companyUrls: {},
            achievements: [
                'Developed a REST API using Spring Boot and Hibernate / PostgreSQL',
                'Collaborated with the team using Git, Trello and CircleCI',
                'Written multiple articles on Web Development thematics'
            ]
        }
    ];

    education = [
        {
            period: '2020 - 2024 (recent graduation)',
            institution: 'University of Applied Sciences, Nysa, Poland',
            degree: 'Bachelor of Engineering, Information Technology',
            description: ''
        },
        {
            period: '2015 - 2019',
            institution: 'Complex of Schools and Educational Institutions, Nysa, Poland',
            degree: 'Information Technology Technician / Computer Specialist',
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
            items: ['Java', 'Go', 'TypeScript', 'Python', 'JavaScript', 'PHP', 'C#', "C++", 'AutoIt', 'AutoHotkey']
        },
        {
            name: 'Backend',
            items: ['Spring', 'Hibernate', 'Gin', 'GORM', 'FastAPI', 'SQL Alchemy', 'Laravel', '.NET', 'Entity Framework']
        },
        {
            name: 'Frontend',
            items: ['Angular', 'Tailwind CSS', 'Bootstrap', "Flowbite", 'DaisyUI', 'jQuery', 'HTML', 'CSS',]
        },

        {
            name: 'Database',
            items: ['PostgreSQL', 'mySQL', 'SQLite', 'MS SQL']
        },

        {
            name: 'Tools & Methods & Computing',
            items: ['Git', 'CircleCI', 'bash', 'Trello', 'Jira', 'Agile', 'Scrum', 'Docker', 'Fly.io', 'GraalVM']
        },
        {
            name: 'My workspace',
            items: ['JetBrains IDEs', 'VS Code', 'VS 2019/2022', 'macOS', 'Windows']
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
    };


    langs = [
        {
            period: 'English',
            name: 'Full professional fluency'
        },
        {
            period: 'German',
            name: 'Basics (in progress)'
        },
        {
            period: 'Polish',
            name: 'Native'
        },
    ];


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
            period: '2017 - 2025',
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
