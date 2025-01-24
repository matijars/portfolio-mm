import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialsComponent } from './components/layout/socials/socials.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { LandingComponent } from './components/sections/landing/landing.component';
import { AboutComponent } from './components/sections/about/about.component';
import { WorkComponent } from './components/sections/work/work.component';
import { ProjectsComponent } from './components/sections/projects/projects.component';
import { ContactComponent } from './components/sections/contact/contact.component';
import { FooterComponent } from './components/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    SocialsComponent,
    HeaderComponent,
    LandingComponent,
    AboutComponent,
    WorkComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
})
export class AppComponent {}
