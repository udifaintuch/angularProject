import { Component, OnInit } from '@angular/core';
import { Coupon } from "../../../coupon";
import { CustomerserviceService } from "../../services/customerservice.service";


@Component({
  selector: 'app-getcouponsbyprice',
  templateUrl: './getcouponsbyprice.component.html',
  styleUrls: ['./getcouponsbyprice.component.css']
})
export class GetcouponsbypriceComponent implements OnInit {
  coupons:Coupon[]=[];
  price:number;
  term:String;
  error:String;

  constructor(private service:CustomerserviceService) { }

  public getAllCouponsByPrice(){
    var self=this;
    let promise=this.service.getAllCouponsByPrice(this.price);
    promise.subscribe(function(coupons){
      self.coupons=coupons;
      var lTable = document.getElementById("table");
      if(lTable.style.display == "none"){
      lTable.style.display =  "table";
      }
    },(error)=>{
      this.error=error.text();
      $('#exampleModalfailureget').modal('show');})
    
  } 

  


  ngOnInit() {
  }

}
