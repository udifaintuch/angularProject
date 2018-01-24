import { Component, OnInit } from '@angular/core';
import { Coupon } from "../../../coupon";
import { CompanyserviceService } from "../../services/companyservice.service";

@Component({
  selector: 'app-getcouponsbydate',
  templateUrl: './getcouponsbydate.component.html',
  styleUrls: ['./getcouponsbydate.component.css']
})
export class GetcouponsbydateComponent implements OnInit {
  coupons:Coupon[]=[];
  deletecoupon:Coupon=new Coupon();
  updatecoupon:Coupon=new Coupon();
  ifCancelEndDate:String;
  ifCancelPrice:number;
  deleteindex:number;
  date:String;
  term:String;
  error:String;



  constructor(private service:CompanyserviceService) { }

  public getAllCouponsByDate(){
    var self=this;
    let promise=this.service.getAllCouponsByDate(this.date);
    promise.subscribe(function(coupons){
      self.coupons=coupons;
      var lTable = document.getElementById("table");
      if(lTable.style.display == "none"){
      lTable.style.display =  "table";
      }
    },(error)=>{
      this.error=error.text();
      $('#exampleModalfailureget').modal('show'); })
    
  } 

  public deleteCoupon(){
    this.service.deleteCoupon(this.deletecoupon).subscribe((success)=>{
      //delete row from table and hide the table if empty
      this.coupons.splice(this.deleteindex,1);
      var lTable = document.getElementById("table");  
      if(this.coupons.length==0){
        if(lTable.style.display == "table"){
          lTable.style.display =  "none";
          }
      }
      $('#exampleModalsucessdelete').modal('show');},
    (error)=>{
      this.error=error.text();
      $('#exampleModalfailuredelete').modal('show');
       })
    
  }

  

  public setCouponDelete(coupon:Coupon){
    this.deletecoupon=coupon;
  }

  public setDeleteIndexFromTable(i:number){
    this.deleteindex=i;

  }

  public setCouponUpdate(coupon:Coupon){
    this.updatecoupon=coupon;
  }

 public  updateCoupon(){
   this.service.updateCoupon(this.updatecoupon).subscribe((success)=>{$('#exampleModalsucessupdate').modal('show');},
   (error)=>{
     //correct the values if update failed for some reason
     this.updatecoupon.enddate=this.ifCancelEndDate;
     this.updatecoupon.price=this.ifCancelPrice;
     this.error=error.text();
     $('#exampleModalfailureupdate').modal('show');
      })
 }


public savePriceAndEndDate(){
  this.ifCancelEndDate=this.updatecoupon.enddate;
  this.ifCancelPrice=this.updatecoupon.price;
}

public correctPriceAndEndDateInTable(){
  this.updatecoupon.enddate=this.ifCancelEndDate;
  this.updatecoupon.price=this.ifCancelPrice;
}

  ngOnInit() {
  }

}
