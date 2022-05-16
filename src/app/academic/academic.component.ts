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
  isSaving = false;
  constructor(private academicService: AcademicService) { }

  ngOnInit(): void {
    this.fetchAcademic();
  }

  fetchAcademic() {
    this.isFetching = true;
    this.academicService.getAllAcademic().subscribe(data => {
      this.academic = data;
      this.isFetching = false;
    });
  }

  createNewAcademic(f: NgForm) {
    this.isSaving = true;
    this.academicService.addAcademic(f).subscribe(() => {
      this.isSaving = false;
      this.fetchAcademic();
      f.resetForm();
    });
  }
}
