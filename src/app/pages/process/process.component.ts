import { Component, OnInit } from '@angular/core';
import * as ProcessesActions from '../../store/processes/processes.actions';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as fromProcesses from '../../store/processes/processes.reducers';
import { Observable } from 'rxjs';
import { UXMethod } from '../../shared/models/ux-method.model';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {
  uxMethods$: Observable<UXMethod[]>;
  selectedMethod: UXMethod;
  selectedProcessType: string;

  constructor(
    private store: Store<fromProcesses.State>
  ) {  }

  ngOnInit() {
    this.selectProcessType('learn');
  }

  selectMethod(method) {
    this.selectedMethod = method;
  }

  selectProcessType(processType) {

    this.selectedProcessType = processType;

    if ( processType === 'learn') {
      this.store.dispatch(new ProcessesActions.FetchLearnMethods());
      this.uxMethods$ = this.store.pipe(
        select('processes'),
        map(m => m.learnList)
      );
    } else if ( processType === 'design') {
      this.store.dispatch(new ProcessesActions.FetchDesignMethods());
      this.uxMethods$ = this.store.pipe(
        select('processes'),
        map(m => m.designList)
      );
    } else if ( processType === 'test') {
      this.store.dispatch(new ProcessesActions.FetchTestMethods());
      this.uxMethods$ = this.store.pipe(
        select('processes'),
        map(m => m.testList)
      );
    }
  }

}
