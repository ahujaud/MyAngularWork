import { AuthService } from './../../shared/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  constructor (private auth: AuthService) { }

  ngOnInit() {
  }

  signup() {
    const email = this.form.value.email;
    const password = this.form.value.password;
    this.auth.signUp(email, password);
  }

}
