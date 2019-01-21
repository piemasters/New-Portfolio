import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, mergeMap } from 'rxjs/operators';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {

  private filePath = './assets/data/projects.json';

  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http.get<Project[]>(this.filePath);
  }

  getProject(id: number) {
    return this.http.get<Project[]>(this.filePath).pipe(
      mergeMap(res => res),
      filter(item => item.id === id)
    );
  }

}

// How to call in a controller
// this.projectsService.getProject(+params['id']).subscribe((project) => {
//   this.project = project;
//   this.techService.getTechnologies().subscribe((tech) => {
//     this.getTechList(tech, project.technologies);
//   });
// });
