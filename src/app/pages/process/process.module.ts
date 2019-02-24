import { NgModule } from '@angular/core';
import { ProcessComponent } from './process.component';
import { ProcessRoutingModule } from './process-routing.module';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ProcessComponent,
  ],
  imports: [
    CommonModule,
    ProcessRoutingModule,
    NgbCarouselModule
  ]
})
export class ProcessModule {}
