import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent implements OnInit {
  @Input() cols: number = 0
  @Input() rows: number = 0

  public matrix: Array<number[]> = []

  constructor() { }

  ngOnInit(): void {
    this.makeMatrix();

    console.log(this.matrix);
  }

  private makeMatrix() {
    let index: number = 0;

    for(let i = 0; i < this.rows; i++) {
      const row: number[] = [];

      for(let j = 0; j < this.cols; j++) {
        row.push(index);

        index++;
      }

      this.matrix.push(row)
    };
  }
}
