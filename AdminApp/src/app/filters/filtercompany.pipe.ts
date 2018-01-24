import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtercompany'
})
export class FiltercompanyPipe implements PipeTransform {

  transform(companies: any, term: any): any {
    //check if search term is undefined
    if(term===undefined){
      return companies.sort(function(company1,company2){return company1.id-company2.id}); 
   }
   //return updated couons array(by the string entered by the client into the term)
   return companies.filter(function(company){
     return company.companyName.toLowerCase().includes(term.toLowerCase());
   }).sort(function(company1,company2){return company1.id-company2.id});
 
  }

}
