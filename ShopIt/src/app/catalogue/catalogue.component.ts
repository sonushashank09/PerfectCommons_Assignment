import { Component, OnInit } from '@angular/core';
import { ServiceService, Product } from '../service.service';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  products:Product[]=[];
  constructor(private service:ServiceService, private prodService:ProductServiceService, private router:Router){ }
  ngOnInit(): void {
    this.service.getProducts().subscribe(products=>{
      this.products=products;
    })
  }
  
  addToCart(prod:any){
    this.prodService.addToCart(prod);
  }

  gotoCart(){
    this.router.navigate(['/cart']);
  }
}
