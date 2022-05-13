import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Academic } from 'src/app/model/academic.model';
import { AcademicService } from '../services/academic.service';


@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})
export class AcademicComponent implements OnInit {
  academic: Academic[] = [];
  isFetching = false;
  constructor(private academicService: AcademicService) { }

  ngOnInit(): void {
  }

  createNewAcademic(f: NgForm) {
    
  }
}
