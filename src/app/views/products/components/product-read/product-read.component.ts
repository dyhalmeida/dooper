import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[];
  displayedColumns: string[] = ['id', 'name', 'price'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.index().subscribe(products => this.products = products);
  }

}
