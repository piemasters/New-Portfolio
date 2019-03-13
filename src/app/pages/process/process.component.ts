import { Component, OnInit } from '@angular/core';
import * as ProcessesActions from '../../store/processes/processes.actions';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as fromProcesses from '../../store/processes/processes.reducers';
import { Observable } from 'rxjs';
import { UXMethod } from '../../shared/models/ux-method.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {
  uxMethods$: Observable<UXMethod[]>;
  selectedProcessType = null;

  constructor(
    private store: Store<fromProcesses.State>,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new ProcessesActions.FetchMethods());
    this.uxMethods$ = this.store.pipe(
      select('processes'),
      map(m => m.methodsList)
    );
    this.store.pipe(
      select('processes'),
      map(m => m.processType)
    ).subscribe((p) =>  {
      this.selectedProcessType = p;
    });
  }

  selectProcessType(processType) {
    this.store.dispatch(new ProcessesActions.SetProcessType(processType));
  }

}

