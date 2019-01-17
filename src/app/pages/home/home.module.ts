import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { ProjectsModule } from '../../entities/projects/projects.module';
import { StoreModule } from '@ngrx/store';
import { companiesReducer } from '../../store/companies/companies.reducers';
import { EffectsModule } from '@ngrx/effects';
import { CompaniesEffects } from '../../store/companies/companies.effects';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ProjectsModule,
    HomeRoutingModule,
    StoreModule.forFeature('companies', companiesReducer),
    EffectsModule.forFeature([CompaniesEffects])
  ]
})
export class HomeModule {}
