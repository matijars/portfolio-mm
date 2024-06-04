import { Injectable } from '@angular/core';
import { ProjectInterface } from '../models/project.model';
import { PROJECTS_DATA } from '../data/projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}

  getProjects(): ProjectInterface[] {
    return PROJECTS_DATA;
  }
}
