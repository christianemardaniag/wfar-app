import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-department-head',
  templateUrl: './department-head.component.html',
  styleUrls: ['./department-head.component.css']
})
export class DepartmentHeadComponent implements OnInit {
  users: User[] = [];
  isFetchingForApprovalFaculty = true;
  id: string = '';
  constructor(private userService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllActiveDepartmentHead();
  }

  getAllActiveDepartmentHead() {
    console.log("FETCHING FACULTY FOR APPROVAL:");
    this.isFetchingForApprovalFaculty = true;
      this.userService.getAllActiveDepartmentHead().subscribe(departmentHead => {
        this.users = departmentHead;
        console.log(this.users);
        this.isFetchingForApprovalFaculty = false;
      });
  }

  updateStatus(id: string, status: string) {
    console.log("FACULTY: ID[" + id + "] STATUS[" + status + "]");
    this.userService.updateStatus(id, status, 'Admin').subscribe(() => {
      this.getAllActiveDepartmentHead();
    });
  }
}
