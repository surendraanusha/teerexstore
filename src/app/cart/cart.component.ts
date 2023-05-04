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
  }

  removeItem(productId:any){
    let index = this.productService.cartItems.findIndex((eachItem:any)=>(
      eachItem.id === productId
    ))
    this.productService.cartItems.splice(index,1)
  }

  increaseQuantity(productId:any){
    let v = this.productService.cartItems.map((eachCartItem:any)=>{
      
      if(eachCartItem.id === productId){
        let updatedQuantity = eachCartItem.quantity + 1
        return {...eachCartItem,quantity:updatedQuantity}
      }
    
      return eachCartItem
    })
  //  console.log(v)
  }

  deCreaseQuantity(productId:any){
    // console.log(productId)
    let v = this.productService.cartItems.map((eachCartItem:any)=>{
      
      if(eachCartItem.id === productId.id){
        const updatedQuantity = eachCartItem.quantity - 1
        return {...eachCartItem, quantity: updatedQuantity}
      }
      return eachCartItem
    })
    // console.log(v)
  }



  // incrementCartItemQuantity = id => {
  //   this.setState(prevState => ({
  //     cartList: prevState.cartList.map(eachCartItem => {
  //       if (id === eachCartItem.id) {
  //         const updatedQuantity = eachCartItem.quantity + 1
  //         return {...eachCartItem, quantity: updatedQuantity}
  //       }
  //       return eachCartItem
  //     }),
  //   }))
  // }

}
