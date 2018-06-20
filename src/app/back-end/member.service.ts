import {Injectable} from '@angular/core';
import {MemberModule} from '../member/member.module';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

class Members {
}

@Injectable({
  providedIn: MemberModule
})
export class MemberService {

  constructor(private http: HttpClient) {
  }

  getMembers(): Observable<Members> {
    return this.http.get<Members>('');
  }
}
