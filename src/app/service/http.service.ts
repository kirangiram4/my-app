import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<any>("http://localhost:3000/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
 /* addToCart(payload: any) {
    return this.http.post(`http://localhost:3000/cart`, payload);
  }

  getCartItems() {
    return this.http.get(`http://localhost:3000/cart`);
  }
  increaseQty(payload: any) {
    return this.http.post(`http://localhost:3000/cart`, payload);
  }
  emptyCart() {
    return this.http.delete(`http://localhost:3000/cart/empty-cart`);
  }*/
}
