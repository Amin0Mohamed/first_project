import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { TeacherComponent } from './app/components/teacher/teachers.component';
import { StudentComponent } from './app/components/student/students.component';



bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  // bootstrapApplication(TeacherComponent, appConfig)
  // .catch((err) => console.error(err));

  // bootstrapApplication(StudentComponent, appConfig)
  // .catch((err) => console.error(err));


