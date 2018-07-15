import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListMembersComponent} from './list-members.component';
import {MemberModule} from '../member.module';
import {DebugElement} from "@angular/core";
import {createStub} from '../../utilities/create-stub';
import {MemberService} from "../../back-end/member.service";
import {Subject} from "rxjs/internal/Subject";
import {Member} from "../../model/Member";
import {By} from "@angular/platform-browser";

describe('ListMembersComponent', () => {
  let component: ListMembersComponent;
  let fixture: ComponentFixture<ListMembersComponent>;
  let element: DebugElement;
  const memberServiceStub = createStub(MemberService);
  const getMemberSubject = new Subject<Array<Member>>();

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
    spyOn(memberServiceStub, 'getMembers').and.returnValue(getMemberSubject);
    fixture = TestBed.createComponent(ListMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retreieve list of members from backend', function () {
    getMemberSubject.next([{} as Member, {} as Member]);
    fixture.detectChanges();
    expect(memberServiceStub.getMembers).toHaveBeenCalled();
    expect(component.data).toBeDefined();
  });

  it('should not show any rows if Array is Empty', function () {
    getMemberSubject.next([])
    fixture.detectChanges();

    element.query(By.css(""))


  });
});
