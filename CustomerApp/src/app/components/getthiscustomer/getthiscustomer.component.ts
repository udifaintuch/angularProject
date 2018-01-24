import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from "../../services/customerservice.service";
import { Customer } from "../../../customer";

@Component({
  selector: 'app-getthiscustomer',
  templateUrl: './getthiscustomer.component.html',
  styleUrls: ['./getthiscustomer.component.css']
})
export class GetthiscustomerComponent implements OnInit {
  customer:Customer=new Customer();
  error:String;

  constructor(private service:CustomerserviceService) {
    this.getThisCustomer();
   }

  public getThisCustomer(){
    var self=this;
    let promise=this.service.getThisCustomer();
    promise.subscribe(function(customer){
      self.customer=customer;
    }
    ,(error)=>{this.error=error.text();
      $('#exampleModalfailureget').modal('show');})
  }

  ngOnInit() {
  }

}
