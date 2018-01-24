import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CreatecouponComponent } from './components/createcoupon/createcoupon.component';
import { GetallcouponsComponent } from './components/getallcoupons/getallcoupons.component';
import { GetcouponsbydateComponent } from './components/getcouponsbydate/getcouponsbydate.component';
import { GetcouponsbyidComponent } from './components/getcouponsbyid/getcouponsbyid.component';
import { GetcouponsbypriceComponent } from './components/getcouponsbyprice/getcouponsbyprice.component';
import { GetcouponsbytypeComponent } from './components/getcouponsbytype/getcouponsbytype.component';
import { GetthiscompanyComponent } from './components/getthiscompany/getthiscompany.component';
import { FilterPipe } from './filters/filter.pipe';
import * as $ from "jquery";
import * as bootstrap from "bootstrap";
import { HttpModule } from "@angular/http";
import { RouterModule,Routes } from "@angular/router";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { CompanyserviceService } from "./services/companyservice.service";
import { HomeComponent } from './components/home/home.component';




const routes:Routes=[
  {
  path:"getAllCoupons",
  component:GetallcouponsComponent,
   },

  {
    path:"getthiscompany",
    component:GetthiscompanyComponent,
  },
  {
  path:"createcoupon",
  component:CreatecouponComponent,
  },
  {
    path:"getcouponsbytype",
    component:GetcouponsbytypeComponent,
  },
  {
    path:"getcouponsbydate",
    component:GetcouponsbydateComponent,
  },
  {
    path:"getcouponsbyprice",
    component:GetcouponsbypriceComponent,
  },
    {
      path:"getcouponbyid",
      component:GetcouponsbyidComponent,
    },
    {
      path:"home",
      component:HomeComponent
    },

];



@NgModule({
  declarations: [
    AppComponent,
    CreatecouponComponent,
    GetallcouponsComponent,
    GetcouponsbydateComponent,
    GetcouponsbyidComponent,
    GetcouponsbypriceComponent,
    GetcouponsbytypeComponent,
    GetthiscompanyComponent,
    FilterPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{useHash:true}),
    HttpModule,
    FormsModule,
  ],
  

  providers: [CompanyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
