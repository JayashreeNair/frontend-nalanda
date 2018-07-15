import {Component, OnInit} from '@angular/core';
import {MemberService} from "../../back-end/member.service";
import {Member} from "../../model/Member";
import {MatDialog, MatDialogRef} from "@angular/material";
import {AddMemberComponent} from "../add-member/add-member.component";

@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.css']
})
export class ListMembersComponent implements OnInit {
  data: Array<Member>;

  constructor(private memberService: MemberService,
              private matDialog: MatDialog){
  }

  ngOnInit() {
    this.memberService.getMembers().subscribe(data => {
      this.data = data;
    });
  }

  openDialog(){
    this.matDialog.open(AddMemberComponent);
  }


}
