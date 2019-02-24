import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, mergeMap } from 'rxjs/operators';

import { UXMethod } from '../models/ux-method.model';

@Injectable({
  providedIn: 'root',
})
export class ProcessesService {

  private filePath = './assets/data/ux-methods.json';

  constructor(private http: HttpClient) {}

  getUXMethods() {
    return this.http.get<UXMethod[]>(this.filePath);
  }

  getUXMethod(id: string) {
    return this.http.get<UXMethod[]>(this.filePath).pipe(
      mergeMap(res => res),
      filter(item => item.id === id)
    );
  }

}
