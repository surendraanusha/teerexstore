import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpService: HttpClient) { }

  productUrl = "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json "


  getProducts() {
    return this._httpService.get(this.productUrl)
  }

  cartItems:any=[];


}
