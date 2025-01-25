import { Component, OnInit, inject } from '@angular/core';
import { ProjectItemComponent } from './project-item/project-item.component';
import { ProjectInterface } from '../../../models/project.model';
import { ButtonComponent } from '../../shared/button/button.component';
import { RouterModule } from '@angular/router';
import { GithubService } from '../../../services/github.service';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  providers: [GithubService],
  imports: [
    ProjectItemComponent,
    ButtonComponent,
    RouterModule,
    LoaderComponent,
  ],
})
export class ProjectsComponent implements OnInit {
  projects: ProjectInterface[] = [];
  githubService = inject(GithubService);
  loading: boolean = true;
  error: string = '';

  ngOnInit(): void {
    this.fetchRepositories();
  }

  fetchRepositories(): void {
    this.githubService.getRepositories().subscribe({
      next: (data: ProjectInterface[]) => {
        const desiredIds = [
          181189194, 732711102, 324826157, 181188048, 220041575, 181186765,
        ];
        this.projects = data.filter((project) =>
          desiredIds.includes(project.id)
        );

        this.loading = false;
      },
      error: (err) => {
        this.error = `${err.error.message}`;
        this.loading = false;
      },
    });
  }
}
