import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Student } from '../model/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-academic-details',
  templateUrl: './academic-details.component.html',
  styleUrls: ['./academic-details.component.css']
})

export class AcademicDetailsComponent implements OnInit {
  subject: string;
  grade: string;
  credits: number;
  cgpa: number;
  sgpa: number
  //
  stuForm : FormGroup;
  showModal:boolean = false;
  editMode:boolean = false;
  students: Student[];
  rollno: any;

  constructor(private fb: FormBuilder, private stuService: StudentService) { }

  ngOnInit(): void {

  }
}
