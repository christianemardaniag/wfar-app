import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private baseUrl = "https://wfar-management-system-default-rtdb.firebaseio.com/";
  isValid = true;
  onRegistration = false;
  isRegistered = false;
  isEmailExist = false;
  errorMessage = "";
  user: User = new User;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  register(registerForm: NgForm) {
    this.user.password = registerForm.form.value.password;
    let conPass = registerForm.form.value.confirmPassword; 
    if(this.user.password == conPass) {
      this.onRegistration = true;
      this.validateInputs(registerForm);
    } else {
      this.isValid = false;
      this.errorMessage = "Password and Confirm Password must match";
    }
  }

  validateInputs(registerForm: NgForm){
    this.setUserValue(registerForm);
    this.isEmailAlreadyExist(this.user.email, registerForm);
  }

  setUserValue(f: NgForm){
    this.user.firstName = f.form.value.firstName;
    this.user.middleName = f.form.value.middleName;
    this.user.lastName = f.form.value.lastName;
    this.user.email = f.form.value.email;
    this.user.contactNumber = f.form.value.contactNumber;
    this.user.department = f.form.value.department;
    this.user.employeeNo = f.form.value.employeeNo;
    this.user.position = "faculty";
    this.user.status = "for approval";
  }

  isEmailAlreadyExist(email:string, registerForm: NgForm){
    this.isEmailExist = false;
    this.http.get<any>(this.baseUrl + 'users.json').subscribe(data => {
      console.log("CHECKING DUPLICATE: EMAIL[" + email + "]");
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const element = data[key];
            if (email == element.email) {
              console.log("DUPLICATE FOUND!");
              this.isEmailExist = true;
              break;
            }
          }
        }
        if (!this.isEmailExist) {
          console.log("PROCESS REGISTRATION");
          this.processRegistration(registerForm);
        }else {
          this.isValid = false;
          this.onRegistration = false;
          this.errorMessage = "Email Address already exist!";
        }
    });
  }

  processRegistration(registerForm: NgForm){
    this.http.put(this.baseUrl + 'users/' + this.user.employeeNo + '.json', this.user).subscribe(() => {
      this.onRegistration = false;
      this.isRegistered = true;
      this.isValid = true;
      registerForm.resetForm();
    });
  }

}
