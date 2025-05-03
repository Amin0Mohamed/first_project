import { Component, OnInit } from "@angular/core";
import { StudentService } from "../../services/student.service";
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
    selector: 'students',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: 'students.component.html',
    styleUrls: ['students.component.css']
})

export class StudentComponent implements OnInit{
    title = 'Student Management System';
    students: any[] = [];
    studentOne: any = {};
    studentId= 0; // Initialize studentId to 0 or any default value

    constructor(private studentsService: StudentService, private route: ActivatedRoute) {

      this.route.params.subscribe(params => {
        this.studentId = +params['id']; // Get 'id' from route params and convert to number
      });
    }
    
    ngOnInit(): void {
        this.studentsService.getStudents().subscribe(data => {
          this.students = data;
          console.log(this.students);
        });
        this.studentsService.getStudentById(this.studentId).subscribe(data => {
            this.studentOne = data;
            console.log(this.studentOne);
        } );
      }
        

    }

    
