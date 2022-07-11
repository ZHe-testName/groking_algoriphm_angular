import { Injectable } from "@angular/core";
import { flatMap } from "rxjs";
import { MatrixCell } from "../interfaces/matrix_interface";

@Injectable({
  providedIn: 'root'
})
export class MatrixAnimationService {
  constructor() {}

  stupidAnimation(matrix: Array<MatrixCell[]>) {
    const row = matrix[0];

    let index = 0;

    row[12].desired = true;
    row[12].highlighted = false;

    function highlightCell () {
      if(index) {
        row[index - 1].highlighted = false;
      }

      row[index].highlighted = true;

      index++

      if(index == 13) {
        clearInterval(interval);
      }
    };

    const interval = setInterval(highlightCell, 350);
  }

  binarySearchAnimation(matrix: Array<MatrixCell[]>) {
    let row = matrix[0];

    

    row.forEach((item: {[index: string]: any}) => {
      const keys = Object.keys(item);

      keys.forEach(k => {
        if(k == 'index') {
          return;
        };

        if(k) {
          item[k] = false;
        };
      });
    });

    let index = Math.floor(row.length / 2);

    row[5].desired = true;
    setTimeout(() => {
      row[index].highlighted = true;
    }, 800);

    setTimeout(() => {
      row[index].highlighted = false;

      row = row.map(i => {
        if(i.index >= index) {
          i.inactive = true;

          return i;
        };

        return i;
      });
    }, 1600);

    setTimeout(() => {
      index = index / 2 - 1;

      row[index].highlighted = true;
    }, 2400);

    setTimeout(() => {
      row[index].highlighted = false;

      row = row.map(i => {
        if(i.index <= index) {
          i.inactive = true;

          return i;
        };

        return i;
      });
    }, 3200);

    setTimeout(() => {
      row[5].highlighted = true;
    }, 4000);
  }
};