import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  constructor() { }

  arrayCreator(length: number) {
    let count = 0;
    const arr = [];
  
    while(count < length) {
      arr.push(++count);
    };
  
    return arr;
  }
}
