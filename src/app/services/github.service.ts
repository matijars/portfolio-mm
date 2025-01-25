import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProjectInterface } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  http = inject(HttpClient);
  private apiUrl = 'https://api.github.com/users/matijars/repos'; // GitHub API URL

  getRepositories(): Observable<ProjectInterface[]> {
    return this.http.get<ProjectInterface[]>(this.apiUrl).pipe(
      map((repos) =>
        repos.map((repo) => ({
          id: repo.id,
          name: repo.name,
          created_at: repo.created_at,
          html_url: repo.html_url,
          homepage: repo.homepage,
          description: repo.description,
          topics: repo.topics,
        }))
      )
    );
  }
}
