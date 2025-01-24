import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialsComponent } from './components/layout/socials/socials.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterModule,
    SocialsComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class AppComponent {}
