import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { StudentService } from '../services/student.service'; // Adjust the path as needed
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'student-one',
  imports: [],
  templateUrl: './student-one.component.html',
  styleUrl: './student-one.component.css'
})
export class StudentOneComponent {

  title = 'Student Management System';
      studentOne: any = {};
      studentId= 0; 
     
      constructor(private studentsService: StudentService, private route: ActivatedRoute) {
  
        this.route.params.subscribe(params => {
          this.studentId = +params['id']; 
        });
      }
      ngOnInit(): void {
          this.studentsService.getStudentById(this.studentId).subscribe(data => {
              this.studentOne = data;
              console.log(this.studentOne);
          } );
        }
}
