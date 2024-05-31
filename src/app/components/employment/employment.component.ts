import { Component } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-employment',
  standalone: true,
  templateUrl: './employment.component.html',
  styleUrl: './employment.component.scss',
  imports: [TabsComponent],
})
export class EmploymentComponent {}
