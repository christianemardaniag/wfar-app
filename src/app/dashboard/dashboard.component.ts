import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: User[] = [];
  isFetchingForApprovalFaculty = true;
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.fetchForApprovalFaculty();
  }

  updateStatus(id: string, status: string){
    console.log("FACULTY: ID["+id+"] STATUS["+status+"]");
    this.userService.updateStatus(id, status, 'Admin').subscribe(() => {
      this.fetchForApprovalFaculty();
    });
  }

  fetchForApprovalFaculty(){
    console.log("FETCHING FACULTY FOR APPROVAL:");
    this.isFetchingForApprovalFaculty = true;
    this.userService.getForApprovalFaculty().subscribe(faculty => {
      this.users = faculty;
      console.log(this.users);
      this.isFetchingForApprovalFaculty = false;
    });
    
  }

}
