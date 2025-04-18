import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import {ScrollStateService} from "../scroll-state.service";
import {Subject, Subscription, takeUntil, throttleTime} from "rxjs";
import {DOCUMENT} from "@angular/common";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isMobileMenuOpen = false;
  menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'CV', path: '/cv' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/#contact'},
  ];
  showAvatar$
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private renderer: Renderer2, private scrollState: ScrollStateService, @Inject(DOCUMENT) private document: Document) {
    this.showAvatar$ =  this.scrollState.showAvatar$
  }



  isHomePage = false;



  ngOnInit(): void {

  }


  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }


  handleLinkClick(url: string) {
    this.router.navigateByUrl(url)
  }


  // handleLinkClick(path: string, fragment?: string): void {
  //   this.router.navigate([path], { fragment }).then(() => {
  //     if (fragment) {
  //       const element = document.getElementById(fragment);
  //       if (element) {
  //         element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //       }
  //     }
  //   });
  // }


  handleMobileClick(path: string): void {
    this.handleLinkClick(path); // Handle navigation and fragment logic
    this.toggleMobileMenu();   // Close the mobile menu
  }



}
