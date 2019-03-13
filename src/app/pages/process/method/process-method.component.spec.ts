import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessMethodComponent } from './process-method.component';
import {RouterTestingModule} from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../../store/app.reducers';
import { LightboxModule } from 'ngx-lightbox';

describe('ProcessComponent', () => {
  let component: ProcessMethodComponent;
  let fixture: ComponentFixture<ProcessMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessMethodComponent ],
      imports: [
        RouterTestingModule,
        LightboxModule,
        StoreModule.forRoot(reducers)
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
