import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RegisterForm } from 'src/app/types/auth';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  notSame: boolean = false;
  form: RegisterForm = {
    email: '',
    password: '',
    conformPassword: '',
  };

  passwordMatched: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  submit() {
    if (this.form.password != this.form.conformPassword) {
      this.notSame = false;
      return;
    }
    this.http.post('/api/user/register', this.form).subscribe((res: any) => {
      if (res.status == 'success') {
        console.log('success');
      }
    });
  }

  isLoading() {
    return false;
  }
}
