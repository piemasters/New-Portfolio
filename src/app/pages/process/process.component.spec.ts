import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessComponent } from './process.component';
import {RouterTestingModule} from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.reducers';

describe('ProcessComponent', () => {
  let component: ProcessComponent;
  let fixture: ComponentFixture<ProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessComponent ],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(reducers)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
