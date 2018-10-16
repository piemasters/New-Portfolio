import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/company.model';
import { CompaniesService } from './companies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  companies: Company[] = [];
  itemsPerPage = 6;
  page = 1;

  constructor(
    private companiesService: CompaniesService
  ) {
  }

  ngOnInit() {
    this.companies = this.companiesService.getCompanies();
  }
}
