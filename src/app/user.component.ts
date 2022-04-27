import { Component } from "@angular/core";

@Component({
  selector: 'app-user',
  template:
  `<p>Hello {{name}}!</p>
   <p>Hello</p>
`
})

export class UserComponent {
  name = 'Prash';
}

