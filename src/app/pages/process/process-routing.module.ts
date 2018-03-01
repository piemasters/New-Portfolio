import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProcessComponent } from './process.component';

const processRoutes: Routes = [
  { path: 'process', component: ProcessComponent, children: [

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(processRoutes)
  ],
  exports: [RouterModule]
})
export class ProcessRoutingModule {}
