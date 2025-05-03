import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // التأكد من المسار الصحيح
import { User } from '../../model/user'; // التأكد من المسار الصحيح

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: User = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    city: '',
    parentName: '',
    parentPhone: '',
    parentMail: '',
    image: null,
    roleStatus: 1,
    parentStatus: 1
  };

  registrationMessage = '';
  registrationError = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.register(this.user).subscribe({
      next: (response) => {
        this.registrationMessage = 'تم التسجيل بنجاح!';
        this.registrationError = '';
        this.onReset();
      },
      error: (error) => {
        this.registrationError = 'حدث خطأ أثناء التسجيل';
        this.registrationMessage = '';
      }
    });
  }

  onReset() {
    this.user = {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      phone: '',
      city: '',
      parentName: '',
      parentPhone: '',
      parentMail: '',
      image: null,
      roleStatus: 1,
      parentStatus: 1
    };
  }
}
