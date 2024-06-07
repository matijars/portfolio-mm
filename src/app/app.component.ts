import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SocialsComponent } from './components/socials/socials.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './components/landing/landing.component';
import { AboutComponent } from './components/about/about.component';
import { WorkComponent } from './components/work/work.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

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
    WorkComponent,
    ProjectsComponent,
    SafeHtmlPipe,
    ContactComponent,
    FooterComponent,
  ],
})
export class AppComponent {}
