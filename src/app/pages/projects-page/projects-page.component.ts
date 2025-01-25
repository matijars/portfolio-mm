import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { GithubService } from '../../services/github.service';
import { IconLinkComponent } from '../../components/shared/icon-link/icon-link.component';
import { ProjectInterface } from '../../models/project.model';
import { LoaderComponent } from '../../components/shared/loader/loader.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  providers: [GithubService],
  imports: [CommonModule, MatTableModule, IconLinkComponent, LoaderComponent],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss',
})
export class ProjectsPageComponent {
  githubService = inject(GithubService);

  displayedColumns: string[] = ['name', 'date', 'actions'];
  repositories: ProjectInterface[] = [];
  loading: boolean = true;
  error: string = '';

  ngOnInit(): void {
    this.fetchRepositories();
  }

  fetchRepositories(): void {
    this.githubService.getRepositories().subscribe({
      next: (data: ProjectInterface[]) => {
        this.repositories = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = `${err.error.message}`;
        this.loading = false;
      },
    });
  }
}
