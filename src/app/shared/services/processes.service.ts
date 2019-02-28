import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, mergeMap } from 'rxjs/operators';

import { UXMethod } from '../models/ux-method.model';

@Injectable({
  providedIn: 'root',
})
export class ProcessesService {

  private filePath = './assets/data/';

  constructor(private http: HttpClient) {}

  getUXMethods(filename: string) {
    return this.http.get<UXMethod[]>(this.filePath + filename);
  }

  getUXMethod(id: string, filename: string) {
    return this.http.get<UXMethod[]>(this.filePath + filename).pipe(
      mergeMap(res => res),
      filter(item => item.id === id)
    );
  }

}
