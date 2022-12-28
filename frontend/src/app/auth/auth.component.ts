import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  @Output() setUser = new EventEmitter<string>();
  authForm = this.fb.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });
  isLogin = true;

  constructor(private fb: FormBuilder, private auth: AuthService) {
  }

  changeViewSignSignUp() {
    this.isLogin = !this.isLogin;
    this.authForm.reset();
  }

  onSubmit() {
    if (this.authForm.invalid) {
      Object.keys(this.authForm.controls).forEach(field => {
        const control = this.authForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });

      return;
    }

    const {username, password, confirmPassword, name} = this.authForm.getRawValue() as {
      [key: string]: string;
    };

    if (!username || !password) return;

    let authResult;

    if (!this.isLogin && password !== confirmPassword) {
      return alert('Passwords do not match');
    } else if (!this.isLogin) {
      authResult = this.auth.signup(name, username.toLowerCase(), password);
    } else {
      authResult = this.auth.login(username.toLowerCase(), password);
    }

    authResult.subscribe({next: (result: any) => this.setUser.emit(result)});
  }
}
