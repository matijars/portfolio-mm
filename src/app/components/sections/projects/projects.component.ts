import { Component, OnInit, inject } from '@angular/core';
import { ProjectItemComponent } from './project-item/project-item.component';
import { ProjectInterface } from '../../../models/project.model';
import { ProjectsService } from '../../../services/projects.service';
import { ButtonComponent } from '../../shared/button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  imports: [ProjectItemComponent, ButtonComponent, RouterModule],
})
export class ProjectsComponent implements OnInit {
  projects: ProjectInterface[] = [];
  projectsService = inject(ProjectsService);

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }
}
