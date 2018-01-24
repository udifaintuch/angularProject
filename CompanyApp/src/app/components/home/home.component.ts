import { Component, OnInit } from '@angular/core';
import { CompanyserviceService } from "../../services/companyservice.service";
import { Company } from "../../../company";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  company:Company=new Company();

  constructor(private service:CompanyserviceService) {
    this.getThisCompany();
  }

  public getThisCompany(){
   var self=this;
   let promise=this.service.getThisCompany();
   promise.subscribe(function(company){
     self.company=company;

   });
  }

   

  ngOnInit() {
  }

}
