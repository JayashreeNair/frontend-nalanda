import {Component, OnInit} from '@angular/core';
import {MemberService} from "../../back-end/member.service";
import {Member} from "../../model/Member";

@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.css']
})
export class ListMembersComponent implements OnInit {
  data: Array<Member>;

  constructor(private memberService: MemberService) {
  }

  ngOnInit() {
    this.memberService.getMembers().subscribe(data => {
      this.data = data;
    });
  }

}
