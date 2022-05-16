import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  id = localStorage.getItem('loggedId')!;
  user: User = new User;
  isFetchingData = false;
  constructor(private route: ActivatedRoute, private userService: UsersService) { }

  ngOnInit(): void {
    console.log();
    
    this.userService.getUserById(this.id).subscribe(data=>{
      this.user = data;
      this.isFetchingData = false;
    });
  }

}
