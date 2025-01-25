import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
interface Repository {
  name: string;
  created_at: string;
  html_url: string;
  homepage: string;
  description: string;
  topics: string[];
}

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  http = inject(HttpClient);
  private apiUrl = 'https://api.github.com/users/matijars/repos'; // GitHub API URL

  getRepositories(): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.apiUrl).pipe(
      map((repos) =>
        repos.map((repo) => ({
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
