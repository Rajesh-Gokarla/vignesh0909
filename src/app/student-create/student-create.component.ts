import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Student } from '../model/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})

export class StudentCreateComponent implements OnInit {
  stuForm : FormGroup;
  showModal:boolean = false;
  editMode:boolean = false;
  students: Student[];
  rollno: any;

  constructor(private fb: FormBuilder, private stuService: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
    this.stuForm = this.fb.group({
      _id: [''],
      rollno: ['Ex. XXBQXA0XXX', Validators.required],
      name: ['Ex. Someone', Validators.required],
      position: ['Ex. Full Stack Developer', Validators.required],
      dept: ['CSE'],
      year: ['I'],
      sec: ['A'],
      phno: ['9898989898']
    })
  }

  Search(){
    if(this.rollno == ""){
      this.ngOnInit();
    }else{
      this.students = this.students.filter(res => {
        return res.rollno.toLocaleLowerCase().match(this.rollno.toLocaleLowerCase());
      })
    }
  }

  getStudents(){
    this.stuService.getStudentList().subscribe(
      (res: Student[]) => {
      console.log(res);
      this.students = res;
    })
  }

  onDeleteStudent(id: any){
    if(confirm('Do you want to delete this student?')){
      this.stuService.deleteStudent(id).subscribe(
        (res) => {
          console.log(res);
          this.getStudents();
        },
        (err) => {
          console.log(err);
        })
    }
  }

  onEditStudent(stu:Student){
    this.editMode = true;
    this.showModal = true;
    this.stuForm.patchValue(stu);
  }

  onStuSubmit(){
    if(this.stuForm.valid){
      if(this.editMode){
        this.stuService.updateStudent(this.stuForm.value).subscribe(
          (res) => {
            this.getStudents();
            this.onCloseModal();
          },(err) => console.log(err))
      }
      else{
        this.stuService.addStudent(this.stuForm.value).subscribe(
          (res) => {
            this.getStudents();
            this.onCloseModal();
          }, err => console.log(err))
      }
    }
  }

  onCloseModal(){
    this.showModal = false;
    this.editMode = false;
  }

  onAddStudent(){
    this.showModal = true;
  }

  onAcademicPerformance(){

  }
  onPlacementStatus(){

  }
}
