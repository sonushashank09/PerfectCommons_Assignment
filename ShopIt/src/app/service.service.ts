import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { 
    
  }
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>("assets//products.json");
  }
}
export interface Product{
  name: string;
  image: string;
  weight: number;
  price: number;
}
