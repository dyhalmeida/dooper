import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';

import { AppApi } from 'src/app/app-api';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
    private matSnackbar: MatSnackBar
  ) { }

  index(): Observable<Product[]> {
    return this.http.get<Product[]>(AppApi.products);
  }

  show(id: number): Observable<Product> {
    const url: string = `${AppApi.products}/${id}`;
    return this.http.get<Product>(url);
  }

  store(product: Product): Observable<Product> {
    return this.http.post<Product>(AppApi.products, product);
  }

  update(product: Product): Observable<Product> {
    const url: string = `${AppApi.products}/${product.id}`;
    return this.http.put<Product>(url, product);
  }

  delete(id: number): Observable<Product> {
    const url: string = `${AppApi.products}/${id}`;
    return this.http.delete<Product>(url);
  }

  showMessage(message: string): void {
    this.matSnackbar.open(message, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

}
