import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 public productList : any ;

  constructor(private http: HttpService, private cartService : CartService) { }

  /*_getProducts(): void {
    this.http.getAllProducts().subscribe((res: any) => {
      console.log(res.data);
      this.products = res;
      console.log(this.products);
    });
  }*/

  /*_addItemToCart( id: any, quantity: any): void {
    let payload = {
      productId: id,
      quantity,
    };
    this.http.addToCart(payload).subscribe(() => {
      this._getProducts();
      alert('Product Added');
    });
  }*/

  ngOnInit(): void {
   this.http.getAllProducts()
   .subscribe(res => {
    this.productList = res;
    this.productList.forEach((a:any) => {
      Object.assign(a , {quantity:1,total:a.price});
    });
  });
  }

  addtocart(item: any){
   this.cartService.addtoCart(item);
  }

}
