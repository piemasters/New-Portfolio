import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './store/app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {

  }
}
