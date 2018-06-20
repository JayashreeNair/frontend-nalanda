import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListMembersComponent} from './list-members.component';
import {MemberModule} from '../member.module';

describe('ListMembersComponent', () => {
  let component: ListMembersComponent;
  let fixture: ComponentFixture<ListMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MemberModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
