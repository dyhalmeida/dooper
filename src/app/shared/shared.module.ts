import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialdModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [FormsModule, MaterialdModule],
  exports: [FormsModule, MaterialdModule],
  providers: []
})
export class SharedModule {}