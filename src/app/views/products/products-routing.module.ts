import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';


const routes: Routes = [
  {
    path: '', component: ProductsComponent
  },
  {
    path: 'product-create', component: ProductCreateComponent
  },
  {
    path: 'product-update/:id', component: ProductUpdateComponent
  },
  {
    path: 'product-delete/:id', component: ProductDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
