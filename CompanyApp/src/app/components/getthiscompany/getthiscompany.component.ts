import { Component, OnInit } from '@angular/core';
import { CompanyserviceService } from "../../services/companyservice.service";
import { Company } from "../../../company";


@Component({
  selector: 'app-getthiscompany',
  templateUrl: './getthiscompany.component.html',
  styleUrls: ['./getthiscompany.component.css']
})
export class GetthiscompanyComponent implements OnInit {
  company:Company=new Company();
  error:String;


  constructor(private service:CompanyserviceService) {
    this.getThisCompany();
   }

   public getThisCompany(){
    var self=this;
    let promise=this.service.getThisCompany();
    promise.subscribe(function(company){
      self.company=company;
      var table=document.getElementById("table")
      table.style.display="table";
    },(error)=>{this.error=error.text();
    $('#exampleModalfailureget').modal('show');})

    }





  ngOnInit() {
  }

}
