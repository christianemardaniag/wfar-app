import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { User } from 'src/app/model/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard-body',
  templateUrl: './dashboard-body.component.html',
  styleUrls: ['./dashboard-body.component.css']
})
export class DashboardBodyComponent implements OnInit, OnDestroy {
  @Input() id: string | null = '';
  user: User = new User;
  paramsSubscription: Subscription = new Subscription;
  isFetchingData = false;

  constructor(private route: ActivatedRoute, private userService: UsersService) { }

  ngOnInit(): void {
    
    // this.id = this.route.snapshot.params['id'];
    this.paramsSubscription = this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
        if (this.id) {
          this.isFetchingData = true;
          this.userService.getUserById(this.id).subscribe(data=>{
            this.user = data;
            this.isFetchingData = false;
          });
        }
      }
    );
    
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
