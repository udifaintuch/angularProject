import { Component, OnInit } from '@angular/core';
import { Customer } from "../../../customer";
import { AdminserviceService } from "../../services/adminservice.service";
@Component({
  selector: 'app-getcustomer',
  templateUrl: './getcustomer.component.html',
  styleUrls: ['./getcustomer.component.css']
})
export class GetcustomerComponent implements OnInit {
  customerid:number;
  customer:Customer=new Customer;
  ifcancelpassword:String;
  error:String;

  constructor(private service:AdminserviceService) { }


  public getCustomer(){
    var self=this;
    let promise=this.service.getCustomer(this.customerid);
    promise.subscribe(function(customer){
      self.customer=customer;
      var lTable = document.getElementById("table");
      if(lTable.style.display == "none"){
      lTable.style.display =  "table";
      }
    },(error)=>{
      this.error=error.text();
      $('#exampleModalfailureget').modal('show');})


  }

  public updateCustomer(){
    this.service.updateCustomer(this.customer).subscribe((success)=>{$('#exampleModalsucessupdate').modal('show');}
    ,(error)=>{
      this.error=error.text();
      this.customer.password=this.ifcancelpassword;
      $('#exampleModalfailureupdate').modal('show');
      })

}

public deleteCustomer(){
  this.service.deleteCustomer(this.customer).subscribe((success)=>{
    //delete row from table and hide the table
    var element = document.getElementById("tr_customer");
    element.parentElement.removeChild(element);
    var lTable = document.getElementById("table");
    if(lTable.style.display == "table"){
    lTable.style.display =  "none";
    }

    $('#exampleModalsucessdelete').modal('show');}
  ,(error)=>{
    this.error=error.text();
    $('#exampleModalfailuredelete').modal('show');
    })
}



public saveCurrentPassword(){
  this.ifcancelpassword=this.customer.password;
}

public correctUpdateIfCancel(){
this.customer.password=this.ifcancelpassword;
}



  ngOnInit() {
  }

}
