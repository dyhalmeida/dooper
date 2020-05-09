import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';

import { AppApi } from 'src/app/app-api';
import { Product } from '../../models/product.model';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
    private matSnackbar: MatSnackBar
  ) { }

  index(): Observable<Product[]> {
    return this.http.get<Product[]>(AppApi.products)
    .pipe(
      map(product => product),
      catchError(error => this.errorHandle(error))
    );
  }

  show(id: number): Observable<Product> {
    const url: string = `${AppApi.products}/${id}`;
    return this.http.get<Product>(url)
    .pipe(
      map(product => product),
      catchError(error => this.errorHandle(error))
    );
  }

  store(product: Product): Observable<Product> {
    return this.http.post<Product>(AppApi.products, product)
    .pipe(
      map(product => product),
      catchError(error => this.errorHandle(error))
    );
  }

  update(product: Product): Observable<Product> {
    const url: string = `${AppApi.products}/${product.id}`;
    return this.http.put<Product>(url, product)
    .pipe(
      map(product => product),
      catchError(error => this.errorHandle(error))
    );
  }

  delete(id: number): Observable<Product> {
    const url: string = `${AppApi.products}/${id}`;
    return this.http.delete<Product>(url)
    .pipe(
      map(product => product),
      catchError(error => this.errorHandle(error))
    );
  }

  showMessage(message: string, isError: boolean = false): void {
    this.matSnackbar.open(message, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  errorHandle(error: any): Observable<any> {
    this.showMessage('Ocorreu um erro', true);
    return EMPTY;
  }

}
