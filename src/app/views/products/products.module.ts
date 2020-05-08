import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductReadComponent } from './components/product-read/product-read.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';

import { ProductRead2Component } from './components/product-read2/product-read2.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';

@NgModule({
  declarations: [
    ProductsComponent, 
    ProductCreateComponent, 
    ProductReadComponent, 
    ProductUpdateComponent,
    ProductRead2Component,
    ProductDeleteComponent,
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
