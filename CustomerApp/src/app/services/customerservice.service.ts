import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { Coupon } from "../../coupon";
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Rx";


@Injectable()
export class CustomerserviceService {

  constructor(private http:Http) { }

  public purchaseCoupon(coupon:Coupon){
    return this.http.post("http://localhost:8080/CouponsProjectB/webapi/CustomerResource/purchaseCoupon",coupon)
    .catch(function(error){
          console.log(error)
         return  Observable.throw (error);});
  }

  

  public getAllCouponsToTable(){
    return this.http.get("http://localhost:8080/CouponsProjectB/webapi/CustomerResource/getAllCouponsToCustomer")
    .map(function(coupons){
      return coupons.json();

    }).catch(function(error){
          console.log(error)
         return  Observable.throw (error);});

  }

  public getAllPurchaseCoupons(){
    return this.http.get("http://localhost:8080/CouponsProjectB/webapi/CustomerResource/readAllPurchasedCoupons")
    .map(function(coupons){
      return coupons.json();

    }).catch(function(error){
          console.log(error)
         return  Observable.throw (error);});

  }







public  getAllCouponsByType(type:String){
  return this.http.get("http://localhost:8080/CouponsProjectB/webapi/CustomerResource/readAllPurchasedCouponsByType/"+type)
  .map(function(coupons){
    return coupons.json();})
    .catch(function(error){
          console.log(error)
         return  Observable.throw (error);});
}



public getAllCouponsByPrice(price:number){
  return this.http.get("http://localhost:8080/CouponsProjectB/webapi/CustomerResource/readAllPurchasedCouponsByPrice/"+price)
  .map(function(coupons){
    return coupons.json();}).catch(function(error){
        console.log(error)
       return  Observable.throw (error);});
}




public getThisCustomer(){
  return this.http.get("http://localhost:8080/CouponsProjectB/webapi/CustomerResource/readThisCustomer")
  .map(function(company){
    return company.json();}).catch(function(error){ 
            console.log(error)
            return  Observable.throw (error);});
     } 


}
