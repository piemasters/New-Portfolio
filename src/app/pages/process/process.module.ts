import { NgModule } from '@angular/core';
import { ProcessComponent } from './process.component';
import { ProcessRoutingModule } from './process-routing.module';
import { CommonModule } from '@angular/common';
import { LightboxModule } from 'ngx-lightbox';
import { ProcessMethodComponent } from './method/process-method.component';

@NgModule({
  declarations: [
    ProcessComponent,
    ProcessMethodComponent
  ],
  imports: [
    CommonModule,
    ProcessRoutingModule,
    LightboxModule
  ]
})
export class ProcessModule {}
