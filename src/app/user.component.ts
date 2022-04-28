import { Component } from "@angular/core";

@Component({
  selector: 'app-user',
  template:`
  <input type="text"(input)="onUserInput($event)" [value]="name">
  <p>Hello {{name}}!</p>
   <p>Hello</p>
`
})

export class UserComponent {
  name = 'Prashanth';

  onUserInput(event: any) {
    this.name = event.target.value;
  }

}

