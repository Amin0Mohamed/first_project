import { CommonModule } from '@angular/common';
import { Component } from "@angular/core";

@Component({
    selector: 'teachers',     
    standalone: true,
    imports: [CommonModule], 
    templateUrl: 'teachers.component.html',
    styleUrls: ['teachers.component.css']
})

// Export the TeacherComponent to make it available for import
export class TeacherComponent {
    title = 'Teacher Management System';
    teachers = [
        { id: 1, name: 'John Doe', subject: 'Mathematics' },
        { id: 2, name: 'Jane Smith', subject: 'Physics' },
        { id: 3, name: 'Emily Johnson', subject: 'Chemistry' },
        { id: 4, name: 'Michael Brown', subject: 'Biology' },
        { id: 5, name: 'Sarah Davis', subject: 'History' }
    ]; 

    constructor() { // Inject the TeacherService into the constructor
    }
}