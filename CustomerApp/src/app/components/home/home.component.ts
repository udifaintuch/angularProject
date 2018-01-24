import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from "../../services/customerservice.service";
import { Customer } from "../../../customer";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customer:Customer=new Customer();
  
  constructor(private service:CustomerserviceService) {
    this.getThisCustomer();
   }

   public getThisCustomer(){
    var self=this;
    let promise=this.service.getThisCustomer();
    promise.subscribe(function(customer){
      self.customer=customer;
    });
  }


  ngOnInit() {
  }

}
