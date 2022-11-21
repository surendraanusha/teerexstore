import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private productService:ProductService) { }
  cartItems:any=[];
  ngOnInit(): void {
    this.cartItems = this.productService.cartItems
    console.log("cart items service=========>",this.cartItems)
  }

}
