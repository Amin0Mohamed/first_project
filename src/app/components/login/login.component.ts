import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule if not already imported
import { LoginUser } from '../../model/login-user';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, NavComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formdata: LoginUser = { email: '', password: '' };
  errorMessage = '';
  successMessage = '';  

  constructor(private auth: AuthService) {}

  onLogin() {
    this.auth.login(this.formdata).subscribe({
      next: (response) => {
        this.successMessage = 'تم تسجيل الدخول بنجاح!';
        this.errorMessage = '';
      },
      error: (error) => {
        this.errorMessage = 'خطأ في بيانات الدخول. حاول مرة أخرى.';
        this.successMessage = '';
      }
    });
  }
}
