import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Data } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

import { ProjectComponent } from './project.component';
import { ProjectsComponent } from '../projects.component';
import { CustomPipesModule } from '../../../shared/pipes/custom-pipes.module';
import { reducers } from '../../../store/app.reducers';


describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProjectsComponent,
        ProjectComponent
      ],
      imports: [
        CommonModule,
        RouterTestingModule,
        CustomPipesModule,
        NgxPaginationModule,
        StoreModule.forRoot(reducers),
        NgbCarouselModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: {
              subscribe: (fn: (value: Data) => void) => fn({
                id: 1
              })
            }
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
