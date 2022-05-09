import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-user',
  template:`
  <input type="text"[(ngModel)] = "name">
  <p>Hello {{name}}!</p>
   <p>Hello</p>
`
})

export class UserComponent {
  @Input() name = 'Prashanth';

  onUserInput(event: any) {
    this.name = event.target.value;
  }

}

