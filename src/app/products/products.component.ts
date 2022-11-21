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
    console.log("product info===========>",product)
    let payload={
      id:product.id,
      image:product.imageURL,
      name:product.name,
      brand:product.type,
      price:product.price,
      quantity:this.defaultQuantity
    }
    console.log("new obj=========>",payload)

    	let productObject = this._productService.cartItems.find(
			(eachCartItem:any) => eachCartItem.id === payload.id,
		)

		if (productObject) {
			this._productService.cartItems.map((eachItem:any) => {
				if (productObject.id === eachItem.id) {
					let updatedQuantity = eachItem.quantity + payload.quantity
					productObject.quantity = updatedQuantity;
				}
			})
		}
		else {
			this._productService.cartItems.push(payload)
		}
  }
  // addToCartItem(product: any,id:any){
  //   console.log("product ids==========>",product,id)
  //   // // this.productsArray.filter((eachItem:any)=>{
  //   // //       if(eachItem.id === id){
  //   // //         if(product.quantity > 0){
  //   // //           let result = product.quantity - 1
  //   // //           product.quantity = result;
  //   // //           console.log(product.quantity)
  //   // //         }  
  //   // //       }
  //   // //     })
  // }

  // addToCart(productDetails: any, defaultQuantity: number): void {
	// 	let payload = {
	// 		id: productDetails.id,
	// 		image: productDetails.image_url,
	// 		title: productDetails.title,
	// 		brand: productDetails.brand,
	// 		price: productDetails.price,
	// 		quantity: defaultQuantity
	// 	}

	// 	let productObject = this._allProductService.cartItems.find(
	// 		eachCartItem => eachCartItem.id === payload.id,
	// 	)

	// 	if (productObject) {
	// 		this._allProductService.cartItems.map(eachItem => {
	// 			if (productObject.id === eachItem.id) {
	// 				let updatedQuantity = eachItem.quantity + payload.quantity
	// 				productObject.quantity = updatedQuantity;
	// 			}
	// 		})
	// 	}
	// 	else {
	// 		this._allProductService.cartItems.push(payload)
	// 	}


	// }

}
