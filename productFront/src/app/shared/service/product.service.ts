import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  formData!: Product;
  apiUrlGet = 'http://localhost:8080/api/products';
  apiUrl = 'http://localhost:8080/api/product';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(
    private httpClient: HttpClient
  ) {}

  getProducts(): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrlGet);
  }

  getProduct(id: any): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl + id);
  }

  postProducts(product: any): Observable<Product> {
    return this.httpClient.post<any>(this.apiUrl, product, this.httpOptions);
  }

  updateProduct(product:any): Observable<Product> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.httpClient.put<Product>(url, product);
  }

  deleteProduct(id: any): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete<Product>(url);
  }

}
