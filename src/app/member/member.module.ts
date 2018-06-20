import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMembersComponent } from './list-members/list-members.component';
import {CardModule} from '../card/card.module';

@NgModule({
  imports: [
    CommonModule, CardModule
  ],
  declarations: [ListMembersComponent],
  exports: [ListMembersComponent]
})
export class MemberModule { }
