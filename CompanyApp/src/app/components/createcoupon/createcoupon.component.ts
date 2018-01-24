import { Component, OnInit } from '@angular/core';
import { Coupon } from "../../../coupon";
import { CompanyserviceService } from "../../services/companyservice.service";

@Component({
  selector: 'app-createcoupon',
  templateUrl: './createcoupon.component.html',
  styleUrls: ['./createcoupon.component.css']
})
export class CreatecouponComponent implements OnInit {
  coupon:Coupon=new Coupon;
  error:String;

  constructor(private service:CompanyserviceService) { }

  public addCoupon(){
   this.service.addCoupon(this.coupon).subscribe((success)=>{$('#exampleModalsucess').modal('show');},
   (error)=>{
     this.error=error.text();
     $('#exampleModalfailure').modal('show'); })

    
  }



  ngOnInit() {
  }

}
