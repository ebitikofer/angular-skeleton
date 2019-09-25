import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringReversal'
})
export class StringReversalPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.split('').reverse().join('');;
  }

}
