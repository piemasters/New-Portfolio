import { Injectable } from '@angular/core';
import { Company } from '../../models/company.model';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {

  private companies: Company[] = [
    {
      id: 1,
      name: 'CGI',
      img: 'test',
      from: Date.now(),
      to: Date.now(),
      roles: [
        {
          id: 1,
          headline: 'Senior Software Engineer',
          description: 'test',
          from: Date.now(),
          to: Date.now(),
          location: 'Leatherhead'
        },
        {
          id: 2,
          headline: 'Lead UI/UX Designer & Developer',
          description: 'test',
          from: Date.now(),
          to: Date.now(),
          location: 'Leatherhead'
        }
      ]
    }
  ];

  getCompanies() {
    return this.companies;
  }

  getProject(id: number) {
    return this.companies.find(
      (p) => {
        return p.id === id;
      }
    );
  }
}
