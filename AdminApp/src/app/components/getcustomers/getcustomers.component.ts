import { Component, OnInit } from '@angular/core';
import { Customer } from "../../../customer";
import { AdminserviceService } from "../../services/adminservice.service";
@Component({
  selector: 'app-getcustomers',
  templateUrl: './getcustomers.component.html',
  styleUrls: ['./getcustomers.component.css']
})
export class GetcustomersComponent implements OnInit {
  customers:Customer[]=[];
  updatecustomer:Customer=new Customer;
  ifcancelpassword:String;
  deletecustomer:Customer=new Customer;
  deleteindex:number;
  term:String;
  error:String;

  constructor(private service:AdminserviceService) {
    this.getAllCustomers();

   }

  public  getAllCustomers(){
    var self=this;
    let promise=this.service.getAllCustomers();
    promise.subscribe(function(customers){
      self.customers=customers;
      var lTable = document.getElementById("table");
      if(lTable.style.display == "none"){
      lTable.style.display =  "table";
      }
    },(error)=>{
      this.error=error.text();
      $('#exampleModalfailureget').modal('show');})
  } 

  public setCustomerupdate(c:Customer){
    this.updatecustomer=c;
  }

  public updateCustomer(){
    this.service.updateCustomer(this.updatecustomer).subscribe((success)=>{$('#exampleModalsucessupdate').modal('show');}
    ,(error)=>{
      this.error=error.text();
      this.updatecustomer.password=this.ifcancelpassword;
      $('#exampleModalfailureupdate').modal('show');
      })

}

public setCustomerdelete(c:Customer){
  this.deletecustomer=c;
}



  public deleteCustomer(){
    this.service.deleteCustomer(this.deletecustomer).subscribe((success)=>{
      this.customers.splice(this.deleteindex,1);
      if(this.customers.length==0){
        var lTable = document.getElementById("table");
        if(lTable.style.display == "table"){
        lTable.style.display =  "none";
          }
         }
      $('#exampleModalsucessdelete').modal('show');}
    ,(error)=>{
      this.error=error.text();
      $('#exampleModalfailuredelete').modal('show');      
      })
  }

  
  public setDeleteIndexFromTable(i:number){
    this.deleteindex=i;
  }


  public saveCurrentPassword(){
    this.ifcancelpassword=this.updatecustomer.password;
  }
  
  public correctUpdateIfCancel(){
  this.updatecustomer.password=this.ifcancelpassword;
  }

  ngOnInit() {
  }

}
