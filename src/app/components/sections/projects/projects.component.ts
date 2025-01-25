import { Component, OnInit, inject } from '@angular/core';
import { ProjectItemComponent } from './project-item/project-item.component';
import { ProjectInterface } from '../../../models/project.model';
import { ButtonComponent } from '../../shared/button/button.component';
import { RouterModule } from '@angular/router';
import { GithubService } from '../../../services/github.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  providers: [GithubService],
  imports: [ProjectItemComponent, ButtonComponent, RouterModule],
})
export class ProjectsComponent implements OnInit {
  projects: ProjectInterface[] = [];
  githubService = inject(GithubService);
  loading: boolean = true;
  error: string = '';

  ngOnInit(): void {
    this.fetchRepositories();
  }

  // Method to fetch repositories
  fetchRepositories(): void {
    this.githubService.getRepositories().subscribe({
      next: (data: ProjectInterface[]) => {
        // Filter the repositories by the specific IDs
        const desiredIds = [
          181189194, 732711102, 324826157, 181188048, 220041575, 181186765,
        ];
        this.projects = data.filter((project) =>
          desiredIds.includes(project.id)
        );

        console.log(this.projects);
        this.loading = false;

        if (this.projects.length === 0) {
          // this.error = 'No repositories found.';
        }
      },
      error: (err) => {
        // Handle errors
        this.error = `Failed to load repositories: ${err.message}`;
        this.loading = false;
        // console.error('Error fetching repositories:', err);
      },
      complete: () => {
        // Handle completion
        // console.log('Repository fetch complete');
      },
    });
  }
}
