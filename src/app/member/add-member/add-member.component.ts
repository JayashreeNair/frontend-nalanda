import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {Member} from "../../model/Member";
import {MemberService} from "../../back-end/member.service";

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
  member: Member;
  constructor(private matDialRef: MatDialogRef<AddMemberComponent>,
    private memberService: MemberService) { }

  ngOnInit() {
    this.member = new Member();
  }

  add(){
    this.memberService.addMember(this.member);
    this.matDialRef.close(this);

  }

}
