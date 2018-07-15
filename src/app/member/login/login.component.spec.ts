import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {MemberModule} from '../member.module';
import {DebugElement} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {createStub} from '../../utilities/create-stub';
import {MemberService} from '../../back-end/member.service';
import {Credentials} from '../../model/Member';
import {Subject} from "rxjs/internal/Subject";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let element: DebugElement;
  const memberServiceStub = createStub(MemberService);
  const authenticatedSubject = new Subject<Response>();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MemberModule],
      providers: [
        {provide: MemberService, useValue: memberServiceStub}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    // spyOn(memberServiceStub, 'authenticate').and.returnValue(authenticatedSubject);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call memberservice authenticate method', function () {
    component.loginForm.get('userId').setValue('someEmail');
    component.loginForm.get('password').setValue('somePwd');

    component.submitForm();
    const credentials = new Credentials();
    credentials.userId = 'someEmail';
    credentials.password = 'somePwd';

    // expect(memberServiceStub.authenticate).toHaveBeenCalledWith(credentials);

  });

  describe('Form Control', () => {
    it('should define a FormGroup', function () {
      expect(component.loginForm).toBeDefined();
      expect(component.loginForm).toEqual(jasmine.any(FormGroup));
    });

    it('should have FormControl for Email and Password', function () {
      expect(component.loginForm.contains('userId')).toBeTruthy();
      expect(component.loginForm.contains('password')).toBeTruthy();
    });

    it('should disable Submit Button is form invalid', function () {
      expect(component.loginForm.status).toEqual('INVALID');
      expect(element.query(By.css('#login-form-submit')).properties['disabled']).toBeTruthy();
    });

    it('should enable Submit Button is form valid', function () {
      const email = element.query(By.css('#login-form-email')).nativeElement;
      email.value = 'someEmail';
      email.dispatchEvent(new Event('input'));

      const pwd = element.query(By.css('#login-form-password')).nativeElement;
      pwd.value = 'somePwd';
      pwd.dispatchEvent(new Event('input'));

      fixture.detectChanges();

      expect(component.loginForm.status).toEqual('VALID');
      expect(element.query(By.css('#login-form-submit')).properties['disabled']).toBeFalsy();
    });
  });
});
