import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, mergeMap } from 'rxjs/operators';

import { Technology } from '../models/technology.model';

@Injectable({
  providedIn: 'root',
})
export class TechnologiesService {

  private filePath = './assets/data/technologies.json';

  constructor(private http: HttpClient) {}

  getTechnologies() {
    return this.http.get<Technology[]>(this.filePath);
  }

  getTechnology(id: number) {
    return this.http.get<Technology[]>(this.filePath).pipe(
      mergeMap(res => res),
      filter(item => item.id === id)
    );
  }
}
