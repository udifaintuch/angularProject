import { Component, OnInit } from '@angular/core';
import { Company } from "../../../company";
import { AdminserviceService } from "../../services/adminservice.service";

@Component({
  selector: 'app-getcompany',
  templateUrl: './getcompany.component.html',
  styleUrls: ['./getcompany.component.css']
})
export class GetcompanyComponent implements OnInit {
  companyid:number;
  company:Company=new Company;
  ifCancelPassword:String;
  ifCancelEmail:String;
  error:String;

  constructor(private service:AdminserviceService) { }


  public getCompany(){
    var self=this;
    let promise=this.service.getCompany(this.companyid);
    promise.subscribe(function(company){
      self.company=company;
      var lTable = document.getElementById("table");
      if(lTable.style.display == "none"){
      lTable.style.display =  "table";
      }
    },(error)=>{
      this.error=error.text();
      $('#exampleModalfailureget').modal('show'); })

  }


  public updateCompany(){
    this.service.updateCompany(this.company).subscribe((success)=>{$('#exampleModalsucessupdate').modal('show');},
    (error)=>{
      this.error=error.text();
      this.company.password=this.ifCancelPassword;
      this.company.email=this.ifCancelEmail;
      $('#exampleModalfailureupdate').modal('show');
       })
    

  }


  public deleteCompany(){
    
    this.service.deleteCompany(this.company).subscribe((success)=>{
      //remove the row from the table in case of success
      var element = document.getElementById("tr_company");
      element.parentElement.removeChild(element);
      //hide table when empty
      var lTable = document.getElementById("table");
      if(lTable.style.display == "table"){
      lTable.style.display =  "none";
      }
    
      $('#exampleModalsucessdelete').modal('show');},
    (error)=>{
      this.error=error.text();
      $('#exampleModalfailuredelete').modal('show');
     })
  }

 


  public saveCurrentPasswordAndEmail(){
    this.ifCancelPassword=this.company.password;
    this.ifCancelEmail=this.company.email;
  }
  
  public correctUpdateIfCancel(){
  this.company.password=this.ifCancelPassword;
  this.company.email=this.ifCancelEmail;
  }

 


  ngOnInit() {
  }

}
