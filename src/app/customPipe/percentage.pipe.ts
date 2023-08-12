import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {

 public transform(price: any, per: any): any {
    // console.log( +price *  ((100 - per)/100),'price');
    // console.log( price,'quant');
    
    return ( +price * ((100 - per)/100));
  }

}
