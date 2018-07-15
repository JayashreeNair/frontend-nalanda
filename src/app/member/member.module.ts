import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListMembersComponent} from './list-members/list-members.component';
import {CardModule} from '../card/card.module';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BackEndModule} from '../back-end/back-end.module';
import { AddMemberComponent } from './add-member/add-member.component';
import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule, CardModule, FormsModule, ReactiveFormsModule, BackEndModule,
    MatCardModule,MatButtonModule,MatDialogModule,BrowserAnimationsModule
  ],
  declarations: [ListMembersComponent, LoginComponent, AddMemberComponent],
  exports: [ListMembersComponent, LoginComponent, AddMemberComponent],
  entryComponents: [AddMemberComponent]
})
export class MemberModule {
}
