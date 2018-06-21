import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MemberService} from './member.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [MemberService]
})
export class BackEndModule {
}
