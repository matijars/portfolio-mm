import { Component } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-work',
  standalone: true,
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
  imports: [TabsComponent],
})
export class WorkComponent {}
