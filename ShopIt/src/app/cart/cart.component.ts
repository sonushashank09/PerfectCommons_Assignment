import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:any;
  // temp:any;
  total:number;
  constructor(private prodservice:ProductServiceService){
    this.total=0;
    this.cartItems=this.prodservice.cartItem;
    this.cartItems.forEach((prod:any)=>{
      this.total=this.total+prod.price;
    })
  }
  ngOnInit(): void {
    
  }
  
  deleteFromCart(prod: any) {
    const i = this.cartItems.findIndex((product: any) => {
      return product.id == prod.id;
    });
    this.total = this.total - this.cartItems[i].price;
    this.cartItems.splice(i, 1);
  }

  checkOut() {
    this.prodservice.emptyCart();
    this.total = 0;
    this.cartItems=[];

  }
}
