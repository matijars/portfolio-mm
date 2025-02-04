import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { GithubService } from '../../services/github.service';
import { IconLinkComponent } from '../../components/shared/icon-link/icon-link.component';
import { ProjectInterface } from '../../models/project.model';
import { LoaderComponent } from '../../components/shared/loader/loader.component';
import { ButtonComponent } from '../../components/shared/button/button.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  providers: [GithubService],
  imports: [
    CommonModule,
    MatTableModule,
    MatListModule,
    IconLinkComponent,
    LoaderComponent,
    ButtonComponent,
  ],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss',
})
export class ProjectsPageComponent {
  githubService = inject(GithubService);
  projects: ProjectInterface[] = [];
  displayedColumns: string[] = ['name', 'date', 'links'];
  loading: boolean = true;
  error: string = '';

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.showColumnsBasedOnScreenSize();
  }

  ngOnInit(): void {
    this.fetchRepositories();
    this.showColumnsBasedOnScreenSize();
  }

  private showColumnsBasedOnScreenSize(): void {
    this.displayedColumns =
      typeof window !== 'undefined' && window.innerWidth <= 500
        ? ['name', 'links']
        : ['name', 'date', 'links'];
  }

  fetchRepositories(): void {
    this.githubService.getRepositories().subscribe({
      next: (data: ProjectInterface[]) => {
        this.projects = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = `${err.error.message}`;
        this.loading = false;
      },
    });
  }
}
