import { CommonModule } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { GithubService } from '../../services/github.service';
import { IconLinkComponent } from '../../components/shared/icon-link/icon-link.component';

interface Repository {
  name: string;
  created_at: string;
  html_url: string;
  homepage: string;
  description: string;
  topics: string[];
}

@Component({
  selector: 'app-projects-page',
  standalone: true,
  providers: [GithubService],
  imports: [CommonModule, MatTableModule, IconLinkComponent],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss',
})
export class ProjectsPageComponent {
  githubService = inject(GithubService);

  displayedColumns: string[] = ['name', 'date', 'actions'];
  repositories: Repository[] = [];
  loading: boolean = true;
  error: string = '';

  ngOnInit(): void {
    this.fetchRepositories();
  }

  // Method to fetch repositories
  fetchRepositories(): void {
    this.githubService.getRepositories().subscribe({
      next: (data: Repository[]) => {
        // Handle the successful data emission

        this.repositories = data;
        console.log(this.repositories);
        this.loading = false;
        if (data.length === 0) {
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
