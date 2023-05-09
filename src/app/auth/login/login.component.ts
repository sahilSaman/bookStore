import { Component, Input } from '@angular/core';
import { LoginForm } from 'src/app/types/auth';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: LoginForm = {
    email: '',
    password: '',
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  submit() {
    this.http.post('/api/user/signIn', this.form).subscribe((res: any) => {
      if (res.status == 'success') {
        alert('success');
      }
    });
    return null;
  }

  isLoading() {
    return false;
  }
}
