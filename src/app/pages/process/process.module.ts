import { NgModule } from '@angular/core';
import { ProcessComponent } from './process.component';
import { ProcessRoutingModule } from './process-routing.module';
import { CommonModule } from '@angular/common';
import { SlideshowModule } from 'ng-simple-slideshow';

@NgModule({
  declarations: [
    ProcessComponent,
  ],
  imports: [
    CommonModule,
    ProcessRoutingModule,
    SlideshowModule
  ]
})
export class ProcessModule {}
