import { Component } from '@angular/core';
import {random} from 'lodash';

// declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-essentials';
  rootName = 'Prashanth R Mohan';
  rootItems = ['Apples', 'Oranges', 'Pears'];
  number = 0;

  onIncrease(){
    // this.number = this.number * 2;
    this.number = random(1,10);
  }

  onNameChanged(newName : string){
    this.rootName = newName

  }

  onItemWasAdded(newItem: any){
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }


}
