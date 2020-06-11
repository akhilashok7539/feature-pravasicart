import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutPageComponent } from './cart/checkout-page/checkout-page.component';


const routes: Routes = [
  { path:'', redirectTo: '/Home', pathMatch: 'full' },
  { path:'Home', component: HomeComponent },
  { path:'cart', component: CartComponent },
  { path:'checkout', component: CheckoutPageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
