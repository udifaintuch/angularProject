import { Component, OnInit } from '@angular/core';
import { Coupon } from "../../../coupon";
import { CustomerserviceService } from "../../services/customerservice.service";


@Component({
  selector: 'app-purchasecoupon',
  templateUrl: './purchasecoupon.component.html',
  styleUrls: ['./purchasecoupon.component.css']
})
export class PurchasecouponComponent implements OnInit {
  coupons:Coupon[]=[];
  couponToPurchase:Coupon=new Coupon();
  term:String;
  error:String;

  constructor(private service:CustomerserviceService) { 
    this.getAllCouponsToTable();

  }



  public  getAllCouponsToTable(){
    var self=this;
    let promise=this.service.getAllCouponsToTable();
    promise.subscribe(function(coupons){
      self.coupons=coupons;
      var lTable = document.getElementById("table");
      if(lTable.style.display == "none"){
      lTable.style.display =  "table";
      }
    },(error)=>{
      this.error=error.text();
      $('#exampleModalfailureGetCoupons').modal('show');})
    
  } 




  public setCouponToPurchase(coupon:Coupon){
    this.couponToPurchase=coupon;
  }

 
public purchaseCoupon(){
  this.service.purchaseCoupon(this.couponToPurchase).subscribe((success)=>{$('#exampleModalsucess').modal('show');},
  (error)=>{
    this.error=error.text();
    $('#exampleModalfailurepurchase').modal('show'); })

}



 



  ngOnInit() {
  }

}
