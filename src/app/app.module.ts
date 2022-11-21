import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { MatButtonModule } from '@angular/material/button';
import { CartComponent } from './cart/cart.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { CartSummeryComponent } from './cart-summery/cart-summery.component';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    CartComponent,
    CartSummeryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTooltipModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
