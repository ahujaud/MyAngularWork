import { NgForm } from '@angular/forms';
import { AuthService } from './../../shared/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  constructor (private auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    const email = this.form.value.email;
    const password = this.form.value.password;

    this.auth.login(email, password);
  }

}
