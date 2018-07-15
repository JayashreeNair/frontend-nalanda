import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddMemberComponent} from './add-member.component';
import {MemberModule} from "../member.module";
import {MemberService} from "../../back-end/member.service";
import {createStub} from "../../utilities/create-stub";
import {MatDialogRef} from "@angular/material";

describe('AddMemberComponent', () => {
  let component: AddMemberComponent;
  let fixture: ComponentFixture<AddMemberComponent>;
  const memberServiceStub = createStub(MemberService);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MemberModule],
      providers: [
        {provide: MemberService, useValue: memberServiceStub}
      ]
    }) .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });
});
