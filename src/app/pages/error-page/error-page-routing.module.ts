import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ErrorPageComponent } from './error-page.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorPageComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorPageRoutingModule {}
