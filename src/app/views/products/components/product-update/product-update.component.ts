import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/shared/models/product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(
    private router: Router,
    private activetedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const id = this.activetedRoute.snapshot.paramMap.get('id');
    this.productService.show(Number(id))
    .subscribe((product: Product) => this.product = product);
  }

  updateProduct(): void {
    this.productService.update(this.product)
    .subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso');
      this.router.navigate(['products']);
    });
  }

  cancel(): void {
    this.router.navigate(['products']);
  }

}
