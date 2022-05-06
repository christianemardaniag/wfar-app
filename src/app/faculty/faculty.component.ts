import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  users: User[] = [];
  isFetchingForApprovalFaculty = true;
  id: string = '';
  constructor(private http: HttpClient, private userService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchForApprovalFaculty();    
  }

  fetchForApprovalFaculty() {
    console.log("FETCHING FACULTY FOR APPROVAL:");
    this.isFetchingForApprovalFaculty = true;
    this.userService.getAllActiveFaculty().subscribe(faculty => {
      this.users = faculty;
      console.log(this.users);
      this.isFetchingForApprovalFaculty = false;
    });

  }


}
