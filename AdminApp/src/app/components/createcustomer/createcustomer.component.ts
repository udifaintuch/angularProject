import { Component, OnInit } from '@angular/core';
import { Customer } from "../../../customer";
import { AdminserviceService } from "../../services/adminservice.service";
@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent implements OnInit {
  customer:Customer=new Customer;
  error:String;

  constructor(private service:AdminserviceService) { }

  public addCustomer(){
      this.service.addCustomer(this.customer).subscribe((success)=>{$('#exampleModalsucess').modal('show');},
      (error)=>{
        this.error=error.text();
        $('#exampleModalfailure').modal('show'); })
      
     
  
    }
  


  ngOnInit() {
  }

}
