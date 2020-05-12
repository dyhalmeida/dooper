import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialdModule } from './material.module';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    DirectivesModule,
    MaterialdModule,
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    DirectivesModule,
    MaterialdModule,
  ],
  providers: []
})
export class SharedModule {}