import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-blocked',
  templateUrl: './blocked.component.html',
  styleUrls: ['./blocked.component.css']
})
export class BlockedComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.userService.getBlockedUsers().subscribe(data => {
      this.users = data;
    })
  }

  unblocked(id: string) {
    this.userService.updateInfo(id, {loginAttempt: 3}).subscribe(()=> {
      this.fetchData();
    })
  }
}
