import {TestBed} from '@angular/core/testing';

import {MemberService} from './member.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Credentials} from '../model/Member';

describe('MemberService', () => {
  let httpTestingController: HttpTestingController;
  let service: MemberService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MemberService]
    }).compileComponents();
    service = TestBed.get(MemberService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call out to backend to retrieve all members', () => {
    const members = [{}, {}];
    service.getMembers().subscribe();
    const req = httpTestingController.expectOne('http://localhost:8080/api/admin/get-members');
    expect(req.request.method).toBe('GET');
    req.flush(members);
  });

  it('should call out to backend to authenticate and get a JWT Token', function () {
    const credentials = new Credentials();
    credentials.userId = 'userId';
    credentials.password = 'password';

    service.authenticate(credentials).subscribe();
    const req = httpTestingController.expectOne('http://localhost:8080/auth/login');

    expect(req.request.method).toBe('POST');
    expect(req.request.body).toBe(credentials);
    req.flush(credentials);

  });


});
