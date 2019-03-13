import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import * as ProcessesActions from '../../../store/processes/processes.actions';
import { select, Store } from '@ngrx/store';
import { UXMethod } from '../../../shared/models/ux-method.model';
import * as fromProcesses from '../../../store/processes/processes.reducers';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-process-method',
  templateUrl: './process-method.component.html',
  styleUrls: [ './process-method.component.scss' ]
})
export class ProcessMethodComponent implements OnInit {
  method: string;
  method$: Observable<UXMethod[]>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromProcesses.State>,
    private _lightbox: Lightbox
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
        this.store.dispatch(new ProcessesActions.SetSelectedMethodId(params[ 'id' ]));
        this.store.dispatch(new ProcessesActions.FetchSelectedMethod());
        this.method$ = this.store.pipe(
          select('processes'),
          map(m => m.selectedMethod)
        );
      }
    );
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
