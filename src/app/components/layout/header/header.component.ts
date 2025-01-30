import { Component, inject } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('slideInFromTop', [
      state(
        'void',
        style({
          transform: 'translateY(-100%)',
        })
      ),
      state(
        '*',
        style({
          transform: 'translateY(0)',
        })
      ),
      transition(':enter', [
        animate(
          '3s ease-out',
          keyframes([
            style({ transform: 'translateY(-100%)', offset: 0 }),
            style({ transform: 'translateY(-100%)', offset: 0.9 }),
            style({ transform: 'translateY(0)', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class HeaderComponent {
  router = inject(Router);
  menuOpen: boolean = false;
  isHomePage: boolean = true;
  sections = ['hero', 'about', 'work', 'projects', 'contact'];
  currentSection = '';

  ngOnInit() {
    this.showNavigation();
    this.observeSections();
  }

  showNavigation() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.urlAfterRedirects;

        // Show nav if it's home page (/) or URL has a hash (#)
        this.isHomePage = currentUrl === '/' || currentUrl.includes('#');
      }
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  // Observe when sections come into view
  observeSections() {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      // Proceed only if IntersectionObserver is available (client-side)
      const options = {
        root: null, // Use the viewport
        threshold: 0.7, // Trigger when 50% of the section is visible
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.currentSection = entry.target.id; // Set the current section when it intersects
          }
        });
      }, options);

      // Observe each section by id
      this.sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.observe(element);
        }
      });
    }
  }

  // Check if a section is in the viewport
  isInViewport(section: string): boolean {
    return this.currentSection === section;
  }
}
