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

  public getProducts(): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrlGet);
  }

  public getProduct(id: any): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl + id);
  }

  public postProducts(product: any): Observable<Product> {
    return this.httpClient.post<any>(this.apiUrl, product, this.httpOptions);
  }

  public updateProduct(product: any, id: any): Observable<Product> {
    return this.httpClient.put<any>(this.apiUrl + id, product, this.httpOptions);
  }

}
