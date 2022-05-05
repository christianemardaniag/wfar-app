import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-dashboard-body',
  templateUrl: './dashboard-body.component.html',
  styleUrls: ['./dashboard-body.component.css']
})
export class DashboardBodyComponent implements OnInit {
  @Input() id: string = '';
  user: User = new User;
  private baseUrl = "https://wfar-management-system-default-rtdb.firebaseio.com/";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(this.baseUrl + 'users.json').subscribe(data => {
      console.log("FETCHING EMPLOYEE NUMBER: ["+this.id+"]");
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const element = data[key];
            if (this.id == element.employeeNo) {
              this.user = element;
              console.log("User:");
              console.log(this.user);
              break;
            }
          }
        }
        
    });
  }

}
