import { Component, OnInit } from '@angular/core';
import { Coupon } from "../../../coupon";
import { CompanyserviceService } from "../../services/companyservice.service";

@Component({
  selector: 'app-getcouponsbyid',
  templateUrl: './getcouponsbyid.component.html',
  styleUrls: ['./getcouponsbyid.component.css']
})
export class GetcouponsbyidComponent implements OnInit {
  coupon:Coupon=new Coupon;
  couponid:number;
  ifCancelEndDate:String;
  ifCancelPrice:number;
  error:String;

  constructor(private service:CompanyserviceService) { }

  public getCouponById(){
    var self=this;
    let promise=this.service.getCouponById(this.couponid);
    promise.subscribe(function(coupon){
      self.coupon=coupon;
      var lTable = document.getElementById("table");
      if(lTable.style.display == "none"){
          lTable.style.display =  "table";
           }
          },(error)=>{
            this.error=error.text();
            $('#exampleModalfailureget').modal('show'); })
    
  } 

  public deleteCoupon(){
    this.service.deleteCoupon(this.coupon).subscribe((success)=>{
      //delete row from table only in case of success
      var element = document.getElementById("tr_coupon");
      element.parentElement.removeChild(element);
       //hide table only in case of success
      var lTable = document.getElementById("table");
      if(lTable.style.display == "table"){
      lTable.style.display =  "none";
      }
      $('#exampleModalsucessdelete').modal('show');},
    (error)=>{
      this.error=error.text();
      $('#exampleModalfailuredelete').modal('show');
       })
    
  }

 

  

 public  updateCoupon(){
   this.service.updateCoupon(this.coupon).subscribe((success)=>{$('#exampleModalsucessupdate').modal('show');},
   (error)=>{
     this.error=error.text();
     this.coupon.enddate=this.ifCancelEndDate;
     this.coupon.price=this.ifCancelPrice;
     $('#exampleModalfailureupdate').modal('show');
     })
 }

 

public savePriceAndEndDate(){
  this.ifCancelEndDate=this.coupon.enddate;
  this.ifCancelPrice=this.coupon.price;
}

public correctPriceAndEndDateInTable(){
  this.coupon.enddate=this.ifCancelEndDate;
  this.coupon.price=this.ifCancelPrice;
}




  ngOnInit() {
  }

}
