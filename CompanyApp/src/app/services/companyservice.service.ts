import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Coupon } from "../../coupon";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Rx";

@Injectable()
export class CompanyserviceService {

  constructor(private http:Http ) { }

  public addCoupon(coupon:Coupon){
    return this.http.post("http://localhost:8080/CouponsProjectB/webapi/CompanyResource/createCoupon",coupon)
    .catch(function(error){
          console.log(error)
         return  Observable.throw (error);});
      
  }

  public getAllCoupons(){
    return this.http.get("http://localhost:8080/CouponsProjectB/webapi/CompanyResource/readAllCoupons")
    .map(function(coupons){
      return coupons.json();}).catch(function(error){
            console.log(error)
           return  Observable.throw (error);});
        

  }

public deleteCoupon(coupon:Coupon){
  return this.http.delete("http://localhost:8080/CouponsProjectB/webapi/CompanyResource/removeCoupon",{body:coupon})
  .catch(function(error){
        console.log(error)
       return  Observable.throw (error);});
    
}

public updateCoupon(coupon:Coupon){
  return this.http.put("http://localhost:8080/CouponsProjectB/webapi/CompanyResource/updateCoupon",coupon)
  .catch(function(error){
        console.log(error)
       return  Observable.throw (error); });
    
}

public  getAllCouponsByType(type:String){
  return this.http.get("http://localhost:8080/CouponsProjectB/webapi/CompanyResource/readCouponsByType/"+type)
  .map(function(coupons){
    return coupons.json();}).catch(function(error){
          console.log(error)
         return  Observable.throw (error);});
      
}

public getAllCouponsByDate(date:String){
  return this.http.get("http://localhost:8080/CouponsProjectB/webapi/CompanyResource/readCouponsByDate/"+date)
  .map(function(coupons){
    return coupons.json();}).catch(function(error){
          console.log(error)
         return  Observable.throw (error);});
      
}

public getAllCouponsByPrice(price:number){
  return this.http.get("http://localhost:8080/CouponsProjectB/webapi/CompanyResource/readCouponsByPrice/"+price)
  .map(function(coupons){
    return coupons.json();}).catch(function(error){
          console.log(error)
         return  Observable.throw (error);});
      
}

public getCouponById(couponid:number){
  return this.http.get("http://localhost:8080/CouponsProjectB/webapi/CompanyResource/readCoupon/"+couponid)
  .map(function(coupons){
    return coupons.json()}).catch(function(error){
          console.log(error)
         return  Observable.throw (error);});
      
}

public getThisCompany(){
  return this.http.get("http://localhost:8080/CouponsProjectB/webapi/CompanyResource/readThisCompany")
  .map(function(company){
    return company.json();}).catch(function(error){
          console.log(error)
         return  Observable.throw (error);});
      
     } 


  

  



}
