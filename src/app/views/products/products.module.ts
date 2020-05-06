import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductReadComponent } from './components/product-read/product-read.component';
import { ProductRead2Component } from './components/product-read2/product-read2.component';

@NgModule({
  declarations: [ProductsComponent, ProductCreateComponent, ProductReadComponent, ProductRead2Component],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
