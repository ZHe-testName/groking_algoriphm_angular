import { Injectable } from "@angular/core";
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
    console.log('binary', matrix);
  }
};