import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/shared/models/product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  deleteProduct(): void {
    
  }

  cancel(): void {

  }

}
