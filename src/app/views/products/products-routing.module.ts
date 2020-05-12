import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';


const routes: Routes = [
  {
    path: '', component: ProductsComponent
  },
  {
    path: 'product-create', component: ProductCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
