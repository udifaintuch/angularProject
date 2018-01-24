import { Component } from '@angular/core';
import { Customer } from "../customer";
import { CustomerserviceService } from "./services/customerservice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  customer:Customer=new Customer();

  constructor(private service:CustomerserviceService){
    this.getThisCustomer();

  }
  


  public logout(){
    window.location.assign("http://localhost:8080/CouponsProjectB/LogoutServlet");  
    
  }

  public getThisCustomer(){
    var self=this;
    let promise=this.service.getThisCustomer();
    promise.subscribe(function(customer){
      for(let c of customer){
        console.log(c);
      }
      self.customer=customer;
    });
  }





}
