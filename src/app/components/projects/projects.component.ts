import { Component } from '@angular/core';
import { ProjectItemComponent } from '../project-item/project-item.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  imports: [ProjectItemComponent],
})
export class ProjectsComponent {}
