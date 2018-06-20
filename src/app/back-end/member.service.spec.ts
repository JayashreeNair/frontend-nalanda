import {TestBed} from '@angular/core/testing';

import {MemberService} from './member.service';

fdescribe('MemberService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: MemberService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [MemberService]
    }).compileComponents();
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new MemberService(httpClientSpy);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call out to backend to retrieve all members', () => {
    service.getMembers().subscribe();
    expect(httpClientSpy.get.calls.count()).toBe(1);

  });
});
