import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(coupons: any, term: any): any {
    //check if search term is undefined
    if(term===undefined){
      return coupons.sort(function(coupon1,coupon2){return coupon1.id-coupon2.id}); 
   }
   //return updated couons array(by the string entered by the client into the term)
   return coupons.filter(function(coupon){
     return coupon.title.toLowerCase().includes(term.toLowerCase());
   }).sort(function(coupon1,coupon2){return coupon1.id-coupon2.id});
 
  }

}
