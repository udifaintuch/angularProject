import { Component, OnInit } from '@angular/core';
import { Company } from "../../../company";
import { AdminserviceService } from "../../services/adminservice.service";

@Component({
  selector: 'app-getcompanies',
  templateUrl: './getcompanies.component.html',
  styleUrls: ['./getcompanies.component.css']
})
export class GetcompaniesComponent implements OnInit {
  companies:Company[]=[];
  updatecompany:Company=new Company;
  deletecompany:Company=new Company;
  deleteindex:number;
  ifCancelPassword:String;
  ifCancelEmail:String;
  error:string; //for error response
  term:String; //for filter
  constructor(private service:AdminserviceService) {
    this.getAllCompanies();
   }

  public  getAllCompanies(){
    var self=this;
    let promise=this.service.getAllCompanies();
    promise.subscribe(function(companies){
      self.companies=companies;
      var lTable = document.getElementById("table");
      if(lTable.style.display == "none"){
      lTable.style.display =  "table";
      }
    },(error)=>

    {
      this.error=error.text();
      $('#exampleModalfailureget').modal('show');})
  } 


  public setCompanyupdate(c:Company){
    this.updatecompany=c;
  }

  public updateCompany(){
    this.service.updateCompany(this.updatecompany).subscribe((success)=>{$('#exampleModalsucessupdate').modal('show')},
    (error)=>{
      this.error=error.text();
      this.updatecompany.password=this.ifCancelPassword
      this.updatecompany.email=this.ifCancelEmail
      $('#exampleModalfailureupdate').modal('show');
    })

}

public setCompanydelete(c:Company){
  this.deletecompany=c;
}



  public deleteCompany(){
    this.service.deleteCompany(this.deletecompany).subscribe((success)=>{
      $('#exampleModalsucessdelete').modal('show')
      //remove row from table and hide if table is empty
      this.companies.splice(this.deleteindex,1);      
      if(this.companies.length==0){
        var lTable = document.getElementById("table");
        if(lTable.style.display == "table"){
        lTable.style.display =  "none";
          }
         }
    },
    (error)=>{
      this.error=error.text();  
      $('#exampleModalfailuredelete').modal('show'); 
      })
  }

  

  public setDeleteIndexFromTable(i:number){
    this.deleteindex=i;
  }

  public saveCurrentPasswordAndEmail(){
    this.ifCancelPassword=this.updatecompany.password;
    this.ifCancelEmail=this.updatecompany.email;
  }
  
  public correctUpdateIfCancel(){
  this.updatecompany.password=this.ifCancelPassword;
  this.updatecompany.email=this.ifCancelEmail;
  }

  ngOnInit() {
  }

}
