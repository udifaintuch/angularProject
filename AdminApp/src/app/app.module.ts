import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from "@angular/forms";
import { AdminserviceService } from "../app/services/adminservice.service";
import { AppComponent } from './app.component';
import { CreatecompanyComponent } from './components/createcompany/createcompany.component';
import { HttpModule } from "@angular/http";
import { GetcompaniesComponent } from './components/getcompanies/getcompanies.component';
import { RouterModule,Routes } from "@angular/router";
import { GetcompanyComponent } from './components/getcompany/getcompany.component';
import { GetcustomersComponent } from './components/getcustomers/getcustomers.component';
import { CreatecustomerComponent } from './components/createcustomer/createcustomer.component';
import { GetcustomerComponent } from './components/getcustomer/getcustomer.component';
import * as $ from "jquery";
import * as bootstrap from "bootstrap";
import { FiltercompanyPipe } from './filters/filtercompany.pipe';
import { FiltercustomerPipe } from './filters/filtercustomer.pipe';
import { HomeComponent } from './components/home/home.component';


const routes:Routes=[{
  path:"getallcompanies",
  component:GetcompaniesComponent
  },
  {
    path:"createcompany",
    component:CreatecompanyComponent
  },
  {
    path:"getcompany",
    component:GetcompanyComponent
  },
  {
    path:"getallcustomers",
    component:GetcustomersComponent
  },
  {
    path:"createcustomer",
    component:CreatecustomerComponent
  },
  {
    path:"getcustomer",
    component:GetcustomerComponent
  },
  {
    path:"home",
    component:HomeComponent,
  }
  


]

@NgModule({
  declarations: [
    AppComponent,
    CreatecompanyComponent,
    GetcompaniesComponent,
    GetcompanyComponent,
    GetcustomersComponent,
    CreatecustomerComponent,
    GetcustomerComponent,
    FiltercompanyPipe,
    FiltercustomerPipe,
    HomeComponent

  ],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
      }),
    BrowserModule,
    FormsModule,
    HttpModule,

  ],
  providers: [AdminserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
