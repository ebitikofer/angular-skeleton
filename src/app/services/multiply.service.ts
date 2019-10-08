import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultiplyService {

  constructor () { }

  multiplyTwoDigits(a: number, b: number) {
    const mulitiplicationProduct = a * b;
    return mulitiplicationProduct;
  }

}
