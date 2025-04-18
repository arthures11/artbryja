import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMobileMenuOpen = false;
  menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'CV', path: '/cv' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/#contact' }
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }


  handleLinkClick(url: string) {
    this.router.navigateByUrl(url)
  }


}
