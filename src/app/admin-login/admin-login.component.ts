import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  private baseUrl = "https://wfar-management-system-default-rtdb.firebaseio.com/";
  onSigninSpinner = false;
  isLoggedIn = false;
  isIncorrect = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    console.log("DATABASE: " + this.baseUrl);
  }

  userLogin(loginForm: NgForm) {
    let username = loginForm.value.username;
    let password = loginForm.value.password;
    this.onSigninSpinner = true;

    this.http.get<any>(this.baseUrl + 'admin.json')
      .subscribe(data => {
        
        console.log("LOGGING IN: USERNAME[" + username + "]");
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const element = data[key];
            if (username == element.username && password == element.password) {
              this.isLoggedIn = true;
              this.router.navigate(['/main/dashboard']);
            }
          }
        }
        this.onSigninSpinner = false;
        if (!this.isLoggedIn) {
          this.isIncorrect = true;
        }
      });
  }

}
