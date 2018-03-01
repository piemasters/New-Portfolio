import { NgModule } from '@angular/core';
import { ProcessComponent } from './process.component';
import { ProcessRoutingModule } from './process-routing.module';

@NgModule({
  declarations: [
    ProcessComponent,
  ],
  imports: [
    ProcessRoutingModule
  ],
  bootstrap: [ProcessComponent]
})
export class ProcessModule {}
