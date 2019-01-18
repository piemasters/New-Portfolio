import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProjectsService } from '../../../shared/services/projects.service';
import { TechnologiesService } from '../../../shared/services/technologies.service';
import { Project } from '../../../shared/models/project.model';
import { Technology } from '../../../shared/models/technology.model';
import { select, Store } from '@ngrx/store';
import * as fromProjects from '../../../store/projects/projects.reducers';
import * as ProjectsActions from '../../../store/projects/projects.actions';
import { Observable } from 'rxjs/internal/Observable';
import { filter, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  id: number;
  project: Project;
  technologies: Technology[] = [];
  projects$: Observable<Project[]>;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private techService: TechnologiesService,
    private store: Store<fromProjects.State>,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {

        this.projectsService.getProject(+params['id']).subscribe((project) => {
          this.project = project;
          this.techService.getTechnologies().subscribe((tech) => {
            this.getTechList(tech, project.technologies);
          });
        });

        // return this.http.get<Project[]>(this.filePath).pipe(
        //   mergeMap(res => res),
        //   filter(item => item.id === id)
        // );
        this.store.dispatch(new ProjectsActions.FetchTechnologies());
        this.store.dispatch(new ProjectsActions.SetSelectedProject(params['id']));
        this.store.dispatch(new ProjectsActions.FetchSelectedProject());
        this.projects$ = this.store.pipe(select('projects'));
      }
    );


    // this.store.dispatch(new ProjectsActions.SetSelectedProject(project));


  }
  getTechList(techList, projectList) {
    for (const item of projectList) {
      this.technologies.push(
        techList.find( (p) => {
          return p.id === item;
        }
      ));
    }
  }

}
