import { Component } from '@angular/core';
import {Input} from "@angular/core";
interface Project {
  title: string;
  role: string;
  year: string;
  description: string;
  technologies: Technologies[]
  image?: string;
  link: string;
}

 interface Technologies{
  name: string;
  icon: string
}
@Component({
  selector: 'app-project-card',
  standalone: false,
  
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  // project : Project = {
  //   title: 'Luckytap',
  //   role: 'main',
  //   year: '2024',
  //   description: 'something',
  //   technologies: [ 'Angular', 'Firebase', 'Tailwind' ],
  //   image: '',
  //   link: 'luckytap.fun'
  // }

  @Input() project!: Project;
}
