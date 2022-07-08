import { MatrixCell } from './../../../interfaces/matrix_interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HelperService } from 'src/app/service/helper.service';
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  @ViewChild('drawer') drawer: any
  @ViewChild('binary_search_drawer') binary_search_drawer: any
  @ViewChild('stupid_drawer') stupid_drawer: any

  public isOpenOLarge: boolean = false
  public isOpenBinarySearch: boolean = false
  public isOpenStupid: boolean = false

  public arrLength: number = 0
  public searchNumber: number = 0
  public attemptAmount: number = 0
  public searchIndex: number | string = 0

  public binary_form: FormGroup

  constructor(
    private helper: HelperService,
  ) { }

  ngOnInit(): void {
  }

  toggleDrawer(isShow: boolean, componentName: string) {
    switch(componentName) {
      case 'oLarge':
        if (isShow) {
          this.isOpenOLarge = true;
    
          this.drawer.open();
    
          return;
        };
        
        this.drawer.close();
        this.isOpenOLarge = false;

        break;
      case 'binary':
        if (isShow) {
          this.isOpenBinarySearch = true;
    
          this.binary_search_drawer.open();
    
          return;
        };
        
        this.binary_search_drawer.close();
        this.isOpenBinarySearch = false;

        break;
      case 'stupid':
        if (isShow) {
          this.isOpenStupid = true;
    
          this.stupid_drawer.open();
    
          return;
        };
        
        this.stupid_drawer.close();
        this.isOpenStupid = false;

        break;
    }; 
  }

  private binarySearch(arr: Number[], item: number) {
    //low и high хранят границы списка в котором идет поиск
    let low = 0,
      high = arr.length - 1,
      iterationCount = 0;
  
    while(low <= high) {//пока границы не сохранятся до одного элемента
      iterationCount++;
  
      const mid = Math.floor((low + high) / 2);//проверяем средний
      const guess = arr[mid];
  
      //значение найдено
      if (guess == item) {
        return {
          index: mid,
          count: iterationCount,
        };
      };
  
      if (guess > item) {//много
        high = mid - 1;
      } else{//мало
        low = mid + 1;
      }
    };
  
    //Такое значение отсутствует
    return {
      index: 'Гонишь... Такого значения нету.',
      count: iterationCount,
    }
  }
  
  runBinaryAlgorithm() {
    const arr = this.helper.arrayCreator(this.arrLength);
  
    const resultObj = this.binarySearch(arr, this.searchNumber);
  
    this.attemptAmount =resultObj.count;
    this.searchIndex = resultObj.index;
  };
}
