import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SocialsComponent } from './components/socials/socials.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './components/landing/landing.component';
import { AboutComponent } from './components/about/about.component';
import { EmploymentComponent } from './components/employment/employment.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    SocialsComponent,
    HeaderComponent,
    LandingComponent,
    AboutComponent,
    EmploymentComponent,
  ],
})
export class AppComponent {
  title = 'portfolio-mm';
}
