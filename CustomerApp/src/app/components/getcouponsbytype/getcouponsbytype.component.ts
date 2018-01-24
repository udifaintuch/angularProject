import { Component, OnInit } from '@angular/core';
import { Coupon } from "../../../coupon";
import { CustomerserviceService } from "../../services/customerservice.service";

@Component({
  selector: 'app-getcouponsbytype',
  templateUrl: './getcouponsbytype.component.html',
  styleUrls: ['./getcouponsbytype.component.css']
})
export class GetcouponsbytypeComponent implements OnInit {
  coupons:Coupon[]=[];
  type:string;
  term:String;
  error:String;

  constructor(private service:CustomerserviceService) { }


  public  getAllCouponsByType(){
    var self=this;
    let promise=this.service.getAllCouponsByType(this.type);
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
