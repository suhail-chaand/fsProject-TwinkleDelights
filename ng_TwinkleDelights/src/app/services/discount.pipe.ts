import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, percent = 10): number {
    return Math.round(value * (100 - percent) / 100)
  }

}
