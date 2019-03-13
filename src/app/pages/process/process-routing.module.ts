import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProcessComponent } from './process.component';
import { ProcessMethodComponent } from './method/process-method.component';

const routes: Routes = [
  {
    path: '',
    component: ProcessComponent,
    children: [
    ]
  },
  {
    path: ':id',
    component: ProcessMethodComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessRoutingModule {}
