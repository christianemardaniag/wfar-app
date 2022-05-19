import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  users: User[] = [];
  isFetchingForApprovalFaculty = true;
  id: string = '';
  pos = localStorage.getItem('position');
  constructor(private userService: UsersService) {
   }

  ngOnInit(): void {
    this.fetchForApprovalFaculty();
  }

  refreshData(r:any){
    console.log(r);
    
    // this.fetchForApprovalFaculty();
  }

  fetchForApprovalFaculty() {
    console.log("FETCHING FACULTY FOR APPROVAL:");
    this.isFetchingForApprovalFaculty = true;
    
    if (this.pos === 'department head') {
      let id = localStorage.getItem('loggedId')!;
      this.userService.getAllActiveFacultyHandleBy(id).subscribe(faculty => {
        this.users = faculty;
        console.log(this.users);
        this.isFetchingForApprovalFaculty = false;
      });
    } else {
      this.userService.getAllActiveFaculty().subscribe(faculty => {
        this.users = faculty;
        console.log(this.users);
        this.isFetchingForApprovalFaculty = false;
      });
    }
  }

  updateStatus(id: string, status: string) {
    console.log("FACULTY: ID[" + id + "] STATUS[" + status + "]");
    this.userService.updateStatus(id, status, 'Admin').subscribe(() => {
      this.fetchForApprovalFaculty();
    });
  }

}
