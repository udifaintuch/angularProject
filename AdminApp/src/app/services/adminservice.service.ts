import { Injectable } from '@angular/core';
import { Company } from "../../company";
import { Customer } from "../../customer";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Rx";

@Injectable()
export class AdminserviceService {

  constructor(private http:Http) { }

  public addCompany(company:Company){
    return this.http.post("http://localhost:8080/CouponsProjectB/webapi/AdminResource/createCompany",company)
    .catch(function(error){

    console.log(error)
   return  Observable.throw (error);
    
    });
  }

 

  public getAllCompanies(){
    return this.http.get("http://localhost:8080/CouponsProjectB/webapi/AdminResource/readAllCompanies")
    .map(function(companies){
        return companies.json();}).catch(function(error){
          
              console.log(error)
             return  Observable.throw (error);
              
              });
          ;
    }



    public updateCompany(company:Company){
      return this.http.put("http://localhost:8080/CouponsProjectB/webapi/AdminResource/updateCompany",company)
      .catch(function(error){
        
            console.log(error)
           return  Observable.throw (error);
            
            });
        ;
    
    }

    public deleteCompany(company:Company){
      return this.http.delete("http://localhost:8080/CouponsProjectB/webapi/AdminResource/removeCompany",{body:company})
      .catch(function(error){
        
            console.log(error)
           return  Observable.throw (error);
            
            });
        
      }
      
    


public getCompany(id:number){
  return this.http.get("http://localhost:8080/CouponsProjectB/webapi/AdminResource/readCompany/"+id)
  .map(function(company){
    return company.json();}).catch(function(error){
      
          console.log(error)
         return  Observable.throw (error);
          
          });
      ;
}

public getAllCustomers(){
  return this.http.get("http://localhost:8080/CouponsProjectB/webapi/AdminResource/readAllCustomers")
  .map(function(customers){
      return customers.json();}).catch(function(error){
        
            console.log(error)
           return  Observable.throw (error);
            
            });
        ;

}


public updateCustomer(customer:Customer){
  return this.http.put("http://localhost:8080/CouponsProjectB/webapi/AdminResource/updateCustomer",customer)
  .catch(function(error){
    
        console.log(error)
       return  Observable.throw (error);
        
        });
    ;
}

public deleteCustomer(customer:Customer){
  return this.http.delete("http://localhost:8080/CouponsProjectB/webapi/AdminResource/removeCustomer",{body:customer})
  .catch(function(error){
    
        console.log(error)
       return  Observable.throw (error);
        
        });
    ;
  }

  public addCustomer(customer:Customer){
    return this.http.post("http://localhost:8080/CouponsProjectB/webapi/AdminResource/createCustomer",customer).
    catch(function(error){
      
          console.log(error)
         return  Observable.throw (error);
          
          });
      
  }


public getCustomer(id:number){
  return this.http.get("http://localhost:8080/CouponsProjectB/webapi/AdminResource/readCustomer/"+id)
  .map(function(company){
    return company.json();}).catch(function(error){
      
          console.log(error)
         return  Observable.throw (error);
          
          })
      
}





    
  }
     

  



