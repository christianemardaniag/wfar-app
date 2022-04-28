import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  onSigninSpinner = false;
  isLoggedIn = false;
  isIncorrect = false;

  constructor(private router: Router, private http: HttpClient, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  userLogin(loginForm: NgForm) {
    let email = loginForm.value.email;
    let password = loginForm.value.password;
    this.onSigninSpinner = true;

    this.loginService.getAllUsers()
      .subscribe(data => {
        console.log("LOGGING IN: EMAIL[" + email + "]");
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const element = data[key];
            if (email == element.email && password == element.password) {
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

  sendNewPass(fpForm: NgForm) {
    console.log(fpForm.form);
  }
}
