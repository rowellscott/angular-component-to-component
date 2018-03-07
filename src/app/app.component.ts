import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <div>
      <h1> {{ title }} </h1>
      <p> {{ content }} </p>
      <hr>
      <app-my-nested></app-my-nested>
      <app-my-property-binding></app-my-property-binding>
      <app-my-event-binding></app-my-event-binding>
      <app-my-mixed-binding></app-my-mixed-binding>
      <app-my-two-way-binding></app-my-two-way-binding>
      <app-my-signup-form></app-my-signup-form>
      <app-quote-list></app-quote-list>
    </div>
`,
  styles: ['p{color:green;}'],
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Angular';
  content: string= "a new world is waiting for!";
}
