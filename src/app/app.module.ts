import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material';
import { NavigationComponent } from './navigation/navigation.component';
import { SliderComponent } from './slider/slider.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { BestsellerComponent } from './new-products/bestseller/bestseller.component';
import { ProductSliderComponent } from './new-products/product-slider/product-slider.component';
import { AdvertisementComponent } from './new-products/advertisement/advertisement.component';
import { CategoriesComponent } from './new-products/categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { ProductViewComponent } from './new-products/product-view/product-view.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutPageComponent } from './cart/checkout-page/checkout-page.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavigationComponent,
    SliderComponent,
    NewProductsComponent,
    BestsellerComponent,
    ProductSliderComponent,
    AdvertisementComponent,
    CategoriesComponent,
    FooterComponent,
    ProductViewComponent,
    CartComponent,
    CheckoutPageComponent
  ],
  imports: [
    BrowserModule,
    DemoMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents:[HeaderComponent,ProductViewComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
