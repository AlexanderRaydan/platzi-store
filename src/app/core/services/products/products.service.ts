import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { Product } from 'src/app/products.model';
import {environment} from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  getAllProducts(){

    //return this.http.get<Product[]>(`${environment.url_api_products}/products`);

    return this.http.get<Product[]>(`http://192.168.0.19:8000/api/products/`)
  }

  getProductById(id: string){

    return this.http.get<Product>(`${environment.url_api_products}/products/${id}`);
  }

  createProduct(product: Product){

    return this.http.post(`${environment.url_api_products}/products` , product);
  }

  updateProduct(id: string , changes: Partial<Product>){

    return this.http.put(`${environment.url_api_products}/products/${id}` , changes);
  }

  deleteProduct(id: string){

    return this.http.delete(`${environment.url_api_products}/products/${id}`);
  }
}
