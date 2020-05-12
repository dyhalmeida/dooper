import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialdModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [FormsModule, CommonModule, MaterialdModule],
  exports: [FormsModule, CommonModule, MaterialdModule],
  providers: []
})
export class SharedModule {}