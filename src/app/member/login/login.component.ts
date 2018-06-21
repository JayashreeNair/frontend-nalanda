import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MemberService} from '../../back-end/member.service';
import {Credentials} from '../../model/Member';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private memberService: MemberService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.fb.group({
      userId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitForm() {
    const credentials = new Credentials();
    credentials.userId = this.loginForm.get('userId').value;
    credentials.password = this.loginForm.get('password').value;

    this.memberService.authenticate(credentials);

  }
}
