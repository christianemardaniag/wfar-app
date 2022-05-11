import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { User } from 'src/app/model/user.model';
import { UsersService } from 'src/app/services/users.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-dashboard-body',
  templateUrl: './dashboard-body.component.html',
  styleUrls: ['./dashboard-body.component.css']
})
export class DashboardBodyComponent implements OnInit, OnDestroy {
  @Input() id: string = '';
  @Output() refreshData = new EventEmitter<string>();
  user: User = new User;
  departmentHeads: User[] = [];
  facultyHandledBy: User[] = [];
  paramsSubscription: Subscription = new Subscription;
  isFetchingData = false;
  isEditingMode = false;
  isSaving = false;
  position = localStorage.getItem('position');

  constructor(private router: Router, private route: ActivatedRoute, private userService: UsersService) { }

  ngOnInit(): void {
    $('[data-toggle="tooltip"]').tooltip();
    
    this.paramsSubscription = this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id')!;
        if (this.id) {
          this.isFetchingData = true;
          this.setSelectDepartmentHead(this.id);
          this.fetchUsers();
          this.fetchFacultyHandledBy();
        }
      }
    );    
    this.refreshData.emit('refresh'); 
  }

  fetchUsers(){
    this.userService.getUserById(this.id).subscribe(data => {
      this.user = data;
      this.isFetchingData = false;
      this.isSaving = false;
    });
  }
  
  fetchFacultyHandledBy() {
    this.userService.getHandleFaculty(this.id).subscribe(data => {
      this.facultyHandledBy = data; 
    });
  }

  updateStatus(id: string, status: string) {
    console.log("FACULTY: ID[" + id + "] STATUS[" + status + "]");
    this.userService.updateStatus(id, status).subscribe(() => {
      this.showUser();
    });
  }

  updatePosition(id: string, pos: string) {
    console.log("FACULTY: ID[" + id + "] POSITION[" + pos + "]");
    if (pos === 'faculty') {
      for (const x of this.facultyHandledBy) {
        let info = { handleById: '', handleByName: '' };
        this.userService.updateInfo(x.employeeNo, info).subscribe();
        
        this.showUser();
      }
    }
    
    this.userService.updatePosition(id, pos).subscribe(() => {
      this.showUser();
    });
  }

  showUser() {
    this.userService.getUserById(this.id).subscribe(data => {
      this.user = data;
      this.isFetchingData = false;    
    });
  }

  setSelectDepartmentHead(exceptID: string) {
    this.userService.getAllActiveDepartmentHead(exceptID).subscribe(data => {
      this.departmentHeads = data;
    })
  }

  updateHandleBy(dhID: string) {
    this.isSaving = true;
    this.userService.getUserById(dhID).subscribe(data => {
      let dhName = data.lastName + ', ' + data.firstName;
      let info = { handleById: dhID, handleByName: dhName };
      this.userService.updateInfo(this.id, info).subscribe(() => {
        this.isEditingMode = false;
        this.fetchUsers();
      })
    });
  }

  goToUser(id: string, pos: string){
    if(pos === 'faculty'){
      this.router.navigate(['/main/faculty/'+id]);
    } else {
      this.router.navigate(['/main/department-head/'+id]);
    }
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
