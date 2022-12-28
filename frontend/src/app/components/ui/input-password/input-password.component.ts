import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.css']
})
export class InputPasswordComponent implements OnInit {

  @Input() form: any;
  @Input() title: string = 'Senha';
  @Input() name: string = 'password';
  @Input() required: string = 'O campo senha é obrigatório';

  constructor(private fb: FormBuilder) {}
  showPassword : boolean = false;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  ngOnInit(): void {
    this.form = this.fb.group({
      [this.name]: ['', Validators.required]
    });
  }

  changeViewPassword() {
    this.showPassword = !this.showPassword;
  }
}
