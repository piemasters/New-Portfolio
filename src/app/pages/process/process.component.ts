import { Component, OnInit } from '@angular/core';
import * as ProcessesActions from '../../store/processes/processes.actions';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as fromProcesses from '../../store/processes/processes.reducers';
import { Observable } from 'rxjs';
import { UXMethod } from '../../shared/models/ux-method.model';
import { Lightbox } from 'ngx-lightbox';

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
    private store: Store<fromProcesses.State>,
    private  _lightbox: Lightbox
  ) {
  }

  ngOnInit() {
    this.selectProcessType('learn');
  }

  selectMethod(method, el) {
    this.selectedMethod = method;
    setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }, 100);

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

  open(images, index): void {
    const gallery = [];
    for (let i = 0; i <= images.length - 1; i++) {
      gallery.push({
        src:  images[i].url,
        caption: images[i].caption
      });
    }

    this._lightbox.open(gallery, index);
  }

  close(): void {
    this._lightbox.close();
  }

}
