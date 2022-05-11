import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  id = localStorage.getItem('loggedId');
  position = localStorage.getItem('position');
  isDepartmentHead = (this.position === 'department head') ? true:false;

  constructor() { }

  ngOnInit(): void {
    
    
  }

}
