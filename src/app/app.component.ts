import { Component } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wfar-app';
  userLoggedIn = false;

  ngOnInit(): void {
    $('[data-toggle="tooltip"]').tooltip();
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function () {
          form.classList.add('was-validated')
        }, false)
      })
  }
  
  submitForm() {
    console.log("Login");
    this.userLoggedIn = !this.userLoggedIn;
  }
}
