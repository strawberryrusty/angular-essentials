import { Component } from "@angular/core";

@Component({
  selector: 'app-user',
  template:`
  <input type="text"(input)="onUserInput($event)">
  <p>Hello {{name}}!</p>
   <p>Hello</p>
`
})

export class UserComponent {
  name = 'Prash';

  onUserInput(event: any) {
    this.name = event.target.value;
  }

}

