import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import * as moment from 'moment';
import { Academic } from 'src/app/model/academic.model';
import { Report } from 'src/app/model/report.model';
import { AcademicService } from 'src/app/services/academic.service';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { ReportService } from 'src/app/services/report.service';
import { Weeks } from './week';
import { DatePipe } from '@angular/common';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-report-upload',
  templateUrl: './report-upload.component.html',
  styleUrls: ['./report-upload.component.css']
})

export class ReportUploadComponent implements OnInit {

  @Input() id: string = '';
  loggedIn = localStorage.getItem('loggedId')!;
  academic: Academic[] = [];
  report: Report = new Report;
  weeks: Weeks[] = [];
  isFetching = false;
  isUploading = false;
  teamMeetScreenshot: FileList | null = null;
  providedActivities: FileList | null = null;
  ts: string[] = [];
  pa: string[] = [];
  datepipe: DatePipe = new DatePipe('en-US')

  firebaseConfig = {
    apiKey: 'AIzaSyCLdj2Q-peocQKzL4Fu4YeF9ZKezqwlmAk',
    authDomain: 'wfar-management-system.firebaseapp.com',
    databaseURL: 'https://wfar-management-system-default-rtdb.firebaseio.com',
    storageBucket: 'wfar-management-system.appspot.com'
  };
  firebaseApp = initializeApp(this.firebaseConfig);
  metadata = { contentType: 'image/jpeg' };
  storage = getStorage();


  constructor(private academicService: AcademicService,
    private reportService: ReportService,
    private userService: UsersService) { }

  ngOnInit(): void {
    this.fetchWeek();


  }

  fetchWeek() {
    this.isFetching = true;
    this.academicService.getAllAcademic().subscribe(data => {
      this.academic = data;
      for (const a of this.academic) {
        this.weeks = a.weeks;
      }
      this.isFetching = false;
    });
  }

  teamMeetScreenshotOnChange(e: Event) {
    this.ts = [];
    this.teamMeetScreenshot = (<HTMLInputElement>e.target).files;
    for (let i = 0; i < this.teamMeetScreenshot!.length; i++) {
      const element = this.teamMeetScreenshot?.item(i);
      this.ts.push(element?.name!);

    }
  }

  providedActivitiesOnChange(e: Event) {
    this.pa = [];
    this.providedActivities = (<HTMLInputElement>e.target).files;
    for (let i = 0; i < this.providedActivities!.length; i++) {
      const element = this.providedActivities?.item(i);
      this.pa.push(element?.name!);

    }
  }

  upload(f: NgForm) {

    let val = f.form.value;
    let idWeek = val.week.split('::');
    let fname: string = '';
    this.userService.getUserById(this.loggedIn).subscribe(data => {
      fname = data.lastName + ', ' + data.firstName + ' ' + data.middleName;
      this.report.userName = fname;
      console.log(fname);
      this.report.academicID = idWeek[0];
      this.report.userID = this.loggedIn;
      this.report.handledBy = data.handleById;
      this.report.week = idWeek[1];
      this.report.weekDays = this.datepipe.transform(this.weeks[idWeek[1] - 1].start, 'MMM d') + ' - ' + this.datepipe.transform(this.weeks[idWeek[1] - 1].end, 'MMM d');
      this.report.submitDate = moment().format();
      this.report.subject = val.subject;
      this.report.cys = val.cys;
      this.report.noOfAttendees = val.noOfAttendees;
      this.report.link = val.link;
      this.report.activities = val.activities;
      this.report.status = 'for review';
      this.report.teamMeetScreenshot = this.ts;
      this.report.providedActivities = this.pa;
      this.uploadFile(this.teamMeetScreenshot!, "teamMeetScreenshot");
      this.uploadFile(this.providedActivities!, "providedActivities");
      console.log(this.report);
      this.reportService.uploadReport(this.report).subscribe(data => {

        f.resetForm();
      });
    })

  }

  uploadFile(files: FileList, folder: string) {
    for (let i = 0; i < files.length; i++) {
      const file = files.item(i)!;
      const storageRef = ref(this.storage, folder + '/' + file.name);
      const uploadTask = uploadBytesResumable(storageRef, file, this.metadata);
      uploadTask.on('state_changed',
        (snapshot) => {
          this.isUploading = true;
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          switch (error.code) {
            case 'storage/unauthorized':
              console.log("storage/unauthorized");
              break;
            case 'storage/canceled':
              console.log('storage/canceled');
              break;
            case 'storage/unknown':
              console.log('storage/unknown');
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            this.isUploading = false;
          });
        }
      );
    }

  }


}
