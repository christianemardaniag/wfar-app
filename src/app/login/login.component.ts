import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User[] = [];
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
        this.user = data;
        this.onSigninSpinner = false;
        for (const x of this.user) {
          if (email == x.email && password == x.password) {
            this.isLoggedIn = true;
            this.router.navigate(['/main/dashboard']);
          }
        }
        if(!this.isLoggedIn) {
          this.isIncorrect = true;
        }
      });
  }

  sendNewPass(fpForm: NgForm) {
    console.log(fpForm.form);
  }
}
