import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { matchValidator } from "../form-validators";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  @Output() setUser = new EventEmitter<string>();
  authForm = this.fb.group({
    name: [''],
    username: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: [''],
  });
  isLogin = true;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword: boolean = false;
  showPasswordConfirm: boolean = false;

  constructor(private fb: FormBuilder, private auth: AuthService) {
  }

  changeViewSignSignUp() {
    this.isLogin = !this.isLogin;

    if (this.isLogin) {
      this.authForm.controls['name'].clearValidators();
      this.authForm.controls['confirmPassword'].clearValidators();
    } else {
      this.authForm.controls['name'].setValidators([Validators.required]);
      this.authForm.controls['password'].setValidators([Validators.required, matchValidator('confirmPassword', true)]);
      this.authForm.controls['confirmPassword'].setValidators([Validators.required, matchValidator('password')]);
    }

    this.authForm.reset();
  }

  changeViewPassword() {
    this.showPassword = !this.showPassword;
  }

  changeViewPasswordConfirm() {
    this.showPasswordConfirm = !this.showPasswordConfirm;
  }

  onSubmit() {
    if (this.authForm.invalid) {
      Object.keys(this.authForm.controls).forEach(field => {
        const control = this.authForm.get(field);
        control?.markAsTouched({onlySelf: true});
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
