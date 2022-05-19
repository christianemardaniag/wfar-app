import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
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
  id: string = '';
  attempt = 0;
  isAttempt = false;
  isBlocked = false;
  constructor(private router: Router, private userService: UsersService, private loginService: LoginService) { }

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
            const e = data[key];
            let id = e.employeeNo;
            if (email == e.email) {
              if (e.loginAttempt <= 0) {
                this.isBlocked = true;
                break;
              }
              if (password == e.password && e.status != 'archived') {
                this.isLoggedIn = true;
                localStorage.setItem('loggedId', id);
                localStorage.setItem('position', e.position);
                if (e.position === 'faculty') {
                  this.router.navigate(['/user', id]);
                } else {
                  this.router.navigate(['/main/dashboard']);
                }
              } else {
                this.userService.getUserById(id).subscribe(data => {
                  this.attempt = data.loginAttempt-1;
                  this.userService.updateInfo(id, {loginAttempt: this.attempt}).subscribe(()=>{
                    console.log(this.attempt);
                    this.isAttempt = true;
                    if (this.attempt <= 0) {
                      this.isBlocked = true;
                    }
                  });
                });
              }
            }
          }
        }
        this.onSigninSpinner = false;
        if (!this.isLoggedIn) {
          this.isIncorrect = !this.isBlocked;
        }
      });
  }

  closeAlert() {
    this.isAttempt = false;
    this.isIncorrect = false;
    this.isBlocked = false;
  }

  sendNewPass(fpForm: NgForm) {
    console.log(fpForm.form);
  }
}
