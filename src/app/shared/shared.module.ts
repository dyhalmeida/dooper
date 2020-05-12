import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialdModule } from './material.module';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [],
  imports: [FormsModule, CommonModule, DirectivesModule, MaterialdModule],
  exports: [FormsModule, CommonModule, DirectivesModule, MaterialdModule],
  providers: []
})
export class SharedModule {}