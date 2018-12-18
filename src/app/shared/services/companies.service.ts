import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project.model';
import { filter, mergeMap } from 'rxjs/operators';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {

  // private companies: Company[] = [
  //   {
  //     id: 1,
  //     name: 'CGI',
  //     img: 'assets/images/companies/cgi_logo.png',
  //     from: "Dec 18, 2018",
  //     to: "Dec 18, 2018",
  //     roles: [
  //       {
  //         id: 1,
  //         headline: 'Senior Software Engineer',
  //         description: 'test',
  //         from: "Dec 18, 2018",
  //         to: "Dec 18, 2018",
  //         location: 'Leatherhead'
  //       },
  //       {
  //         id: 2,
  //         headline: 'Lead UI/UX Designer & Developer',
  //         description: 'test',
  //         from: "Dec 18, 2018",
  //         to: "Dec 18, 2018",
  //         location: 'Leatherhead'
  //       }
  //     ]
  //   }
  // ];
  //
  // getCompanies() {
  //   return this.companies;
  // }
  //
  // getProject(id: number) {
  //   return this.companies.find(
  //     (p) => {
  //       return p.id === id;
  //     }
  //   );
  // }



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
