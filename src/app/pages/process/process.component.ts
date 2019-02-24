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
  showNavigationArrows = true;
  showNavigationIndicators = true;


  constructor(
    private store: Store<fromProcesses.State>,
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new ProcessesActions.FetchUXMethods());
    this.uxMethods$ = this.store.pipe(
      select('processes'),
      map(m => m.uxMethodList)
    );
  }

}
