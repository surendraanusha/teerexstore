import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsArray: any = [];

  buttonText="ADD TO CART";

  defaultQuantity:number=1;

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(data => {
      this.productsArray = data
      // console.log(this.productsArray)
    })
    
  }
  addtocart(product:any){
    // console.log("product info===========>",product)
    let payload={
      id:product.id,
      image:product.imageURL,
      name:product.name,
      brand:product.type,
      price:product.price,
      quantity:this.defaultQuantity
    }
    // console.log("new obj=========>",payload)

    	let productObject = this._productService.cartItems.find(
			(eachCartItem:any) => eachCartItem.id === payload.id)

    //  this.productsArray = this.productsArray.filter((eachObj:any)=>(
    //   eachObj.id === product.id
    // ))
      let index = (this.productsArray.findIndex((eachObj:any)=>(
        eachObj.id === product.id
      )))
      // console.log(this.productsArray[index].quantity)
      // console.log(...this.productsArray)

		if (productObject) {
			this._productService.cartItems.map((eachItem:any) => {
				if (productObject.id === eachItem.id) {
					productObject.quantity = eachItem.quantity + payload.quantity;
          productObject.price = (eachItem.quantity)*payload.price;
				}
			})
		}
		else {
			this._productService.cartItems.push(payload)
		}
  }
}
