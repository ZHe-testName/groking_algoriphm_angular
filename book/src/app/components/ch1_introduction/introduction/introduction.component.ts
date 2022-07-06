import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  @ViewChild('drawer') drawer: any
  @ViewChild('binary_search_drawer') binary_search_drawer: any

  public isOpenOLarge: boolean = false
  public isOpenBinarySearch: boolean = false

  constructor() { }

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
    }; 
  }
}
