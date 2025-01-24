import { Component, inject, ViewEncapsulation } from '@angular/core';
import { TECH_ICONS } from '../../../data/tech-icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  encapsulation: ViewEncapsulation.None, // Needed to svg styling inside scss
})
export class AboutComponent {
  private sanitizer = inject(DomSanitizer);

  // Sanitize the SVG strings and store them in an array
  techIcons: { name: string; svg: SafeHtml }[] = TECH_ICONS.map((icon) => ({
    name: icon.name,
    svg: this.sanitizer.bypassSecurityTrustHtml(icon.svg),
  }));
}
