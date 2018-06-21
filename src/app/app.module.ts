import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainPageModule} from './main-page/main-page.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MemberModule} from './member/member.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainPageModule,
    MemberModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
