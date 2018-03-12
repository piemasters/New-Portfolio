import { NgModule } from '@angular/core';
import { ProcessComponent } from './process.component';
import { ProcessRoutingModule } from './process-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ProcessComponent,
  ],
  imports: [
    CommonModule,
    ProcessRoutingModule
  ]
})
export class ProcessModule {}
