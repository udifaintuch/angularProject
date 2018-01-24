import { Component, OnInit } from '@angular/core';
import { Coupon } from "../../../coupon";
import { CustomerserviceService } from "../../services/customerservice.service";

@Component({
  selector: 'app-getallpurchasecoupons',
  templateUrl: './getallpurchasecoupons.component.html',
  styleUrls: ['./getallpurchasecoupons.component.css']
})
export class GetallpurchasecouponsComponent implements OnInit {
  coupons:Coupon[]=[];
  term:String;
  error:String;

  constructor(private service:CustomerserviceService) {
    this.getAllCoupons();

   }


  public  getAllCoupons(){
    var self=this;
    let promise=this.service.getAllPurchaseCoupons();
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
