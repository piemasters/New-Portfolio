import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, mergeMap } from 'rxjs/operators';

import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {

  private filePath = './assets/data/companies.json';

  constructor(private http: HttpClient) {}

  getCompanies() {
    return this.http.get<Company[]>(this.filePath);
  }

  getCompany(id: number) {
    return this.http.get<Company[]>(this.filePath).pipe(
      mergeMap(res => res),
      filter(item => item.id === id)
    );
  }







}
