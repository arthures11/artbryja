import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
      image: '/assets/images/luckytap-main-large.png',
      link: '/luckytap'
    },
  ];

  // technologies = [
  //   'Angular',
  //   'TypeScript',
  //   'JavaScript',
  //   'HTML/CSS',
  //   'Tailwind CSS',
  //   'Git',
  //   'Node.js',
  //   'MongoDB'
  // ];

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
