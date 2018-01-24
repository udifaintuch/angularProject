import { Component, OnInit } from '@angular/core';
import { Company } from "../../../company";
import { AdminserviceService } from "../../services/adminservice.service";



@Component({
  selector: 'app-createcompany',
  templateUrl: './createcompany.component.html',
  styleUrls: ['./createcompany.component.css']
})
export class CreatecompanyComponent implements OnInit {
  company:Company=new Company();
  error:String;

  constructor(private service:AdminserviceService) { }

 
  public addCompany(){
    this.service.addCompany(this.company).subscribe(
    (success)=>{$('#exampleModalsucess').modal('show');},
    (error)=>{
      this.error=error.text();
      $('#exampleModalfailure').modal('show'); })

  }



    
    
  

  ngOnInit() {
  }

}
