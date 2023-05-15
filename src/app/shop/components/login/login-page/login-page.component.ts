import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from "../../home/layout/layout.component";
import {LoginService} from "../services/login.service";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, LayoutComponent, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [LoginService]

})
export class LoginPageComponent {
  form = this.fb.group({
    login: ['', [Validators.required]],
    password: ['',[Validators.required]]
  })
  login(){
    this.loginService.login(this.form.get('login')?.value as string, this.form.get('password')?.value as string)
  }

 constructor(private loginService: LoginService, private fb: FormBuilder) {
 }
}
