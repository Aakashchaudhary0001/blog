import { Injectable } from '@angular/core';
import { HttpApiService } from './http.service';
import { environment } from 'src/environments/environment';
import { Product } from 'src/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = environment.apiUrl || localStorage.getItem('ServerUrl');
  version = environment.VERSION;

  constructor(private http:HttpApiService) {
   }

  createProduct(data: any) {
    console.log('product service is called')
    return this.http.post(`product/create`, data);
  }
}
