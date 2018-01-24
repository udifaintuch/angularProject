import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from './app.component';
import { PurchasecouponComponent } from './components/purchasecoupon/purchasecoupon.component';
import { CustomerserviceService } from "./services/customerservice.service";
import { GetcouponsbytypeComponent } from './components/getcouponsbytype/getcouponsbytype.component';
import { GetcouponsbypriceComponent } from './components/getcouponsbyprice/getcouponsbyprice.component';
import { GetallpurchasecouponsComponent } from './components/getallpurchasecoupons/getallpurchasecoupons.component';
import { GetthiscustomerComponent } from './components/getthiscustomer/getthiscustomer.component';
import * as $ from "jquery";
import * as bootstrap from "bootstrap";
import { FilterPipe } from './filters/filter.pipe';
import { HomeComponent } from './components/home/home.component';


const routes:Routes=[
  {
  path:"purchasecoupon",
  component:PurchasecouponComponent,
  },
  {
  path:"getcouponsbytype",
  component:GetcouponsbytypeComponent,
  },
  {
  path:"getcouponsbyprice",
  component:GetcouponsbypriceComponent,
  },
  {
  path:"getAllPurchasedCoupons",
  component:GetallpurchasecouponsComponent,
  },
  {
  path:"getthiscustomer",
 component:GetthiscustomerComponent,
 },  
 {
   path:"home",
   component:HomeComponent
 },


]

@NgModule({
  declarations: [
    AppComponent,
    PurchasecouponComponent,
    GetcouponsbytypeComponent,
    GetcouponsbypriceComponent,
    GetallpurchasecouponsComponent,
    GetthiscustomerComponent,
    FilterPipe,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
      }),
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [CustomerserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
