import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.post('https://wfar-management-system-default-rtdb.firebaseio.com/post.json', {username: 'lala', password: 'lolo'})
    .subscribe(data => {
      console.log(data);
      
    });
  }


  
}
