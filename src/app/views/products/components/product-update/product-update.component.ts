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
    private activeRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  updateProduct(): void {

  }

  cancel(): void {
    this.router.navigate(['products']);
  }

}
