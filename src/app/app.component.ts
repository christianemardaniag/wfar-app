import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wfar-app';
  userLoggedIn = false;

  submitForm() {
    console.log("Login");
    this.userLoggedIn = !this.userLoggedIn;
  }
}
