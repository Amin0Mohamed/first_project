import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StudentService } from './services/student.service';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppComponent
  ],
  providers: [StudentService],
  // Removed bootstrap array as AppComponent is a standalone component
})
export class AppModule { }
