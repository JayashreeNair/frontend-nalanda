import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListMembersComponent} from './list-members/list-members.component';
import {CardModule} from '../card/card.module';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BackEndModule} from '../back-end/back-end.module';

@NgModule({
  imports: [
    CommonModule, CardModule, FormsModule, ReactiveFormsModule, BackEndModule
  ],
  declarations: [ListMembersComponent, LoginComponent],
  exports: [ListMembersComponent, LoginComponent]
})
export class MemberModule {
}
