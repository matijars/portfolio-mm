import { Component } from '@angular/core';
import { LandingComponent } from '../../components/sections/landing/landing.component';
import { AboutComponent } from '../../components/sections/about/about.component';
import { WorkComponent } from '../../components/sections/work/work.component';
import { ProjectsComponent } from '../../components/sections/projects/projects.component';
import { ContactComponent } from '../../components/sections/contact/contact.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    LandingComponent,
    AboutComponent,
    WorkComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
