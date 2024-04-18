import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  cartItem:any[]=[];

  constructor() { }

  addToCart(prod:any){
    this.cartItem.push(prod);
  }

  emptyCart(){
    this.cartItem=[];
  }
}
