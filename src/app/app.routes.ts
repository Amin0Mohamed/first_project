import { Routes } from '@angular/router';
import { StudentComponent } from './components/student/students.component';   
import { TeacherComponent } from './components/teacher/teachers.component';
import { AppComponent } from './app.component';
import { StudentOneComponent } from './student-one/student-one.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: '', component: HomeComponent,title:'Home Page' }, // Open AppComponent as the first page
    { path: 'app-register', component: RegisterComponent },
    { path: 'app-login', component: LoginComponent },
    { path: 'students', component: StudentComponent },
    { path: 'teachers', component: TeacherComponent },
    { path: 'student-one/:id', component: StudentOneComponent }
];
