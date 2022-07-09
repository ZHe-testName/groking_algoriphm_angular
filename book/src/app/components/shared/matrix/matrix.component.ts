import { MatrixAnimationService } from './../../../service/matrix.service';
import { MatrixCell } from './../../../interfaces/matrix_interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent implements OnInit {
  @Input() cols: number = 0
  @Input() rows: number = 0
  @Input() btnText: string = ''
  @Input() componentId: string = ''

  public matrix: Array<MatrixCell[]> = []
  public textDesc: string = ''

  constructor(
    private matrixService: MatrixAnimationService,
  ) { }

  ngOnInit(): void {
    this.makeMatrix();
  }

  private makeMatrix() {
    let index: number = 0;

    for(let i = 0; i < this.rows; i++) {
      const row: MatrixCell[] = [];

      for(let j = 0; j < this.cols; j++) {
        row.push({
          index,
          highlighted: false,
          desired: false,
        });

        index++;
      }

      this.matrix.push(row)
    };
  }

  public clickHandler() {
    switch(this.componentId) {
      case 'stupid':
        this.matrixService.stupidAnimation(this.matrix);
        break;
      case 'binary':
        this.matrixService.binarySearchAnimation(this.matrix);
        break;
    };
  }
}
