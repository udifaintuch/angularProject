import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtercustomer'
})
export class FiltercustomerPipe implements PipeTransform {

  transform(customers: any, term: any): any {
    //check if search term is undefined
    if(term===undefined){
      return customers.sort(function(customer1,customer2){return customer1.id-customer2.id}); 
   }
   //return updated couons array(by the string entered by the client into the term)
   return customers.filter(function(customer){
     return customer.custName.toLowerCase().includes(term.toLowerCase());
   }).sort(function(customer1,customer2){return customer1.id-customer2.id});
  }

}
