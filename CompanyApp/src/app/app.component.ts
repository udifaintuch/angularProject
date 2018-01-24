import { Component } from '@angular/core';
import { CompanyserviceService } from "./services/companyservice.service";
import { Company } from "../company";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  company:Company=new Company();

  constructor(private service:CompanyserviceService){
    this.getThisCompany();

  }

  public logout()  {
    window.location.assign("http://localhost:8080/CouponsProjectB/LogoutServlet");
    
  }

  public getThisCompany(){
    var self=this;
    let promise=this.service.getThisCompany();
    promise.subscribe(function(company){
      for(let c of company){
        console.log(c);
      }
      self.company=company;
 
    });
   }



   
}




