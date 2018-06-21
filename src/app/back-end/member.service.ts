import {Injectable} from '@angular/core';
import {MemberModule} from '../member/member.module';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Credentials, Member} from '../model/Member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) {
  }

  getMembers(): Observable<Array<Member>> {
    return this.http.get<Array<Member>>('/api/admin/get-members');
  }

  authenticate(credentials: Credentials) {
    return this.http.post('/login', credentials);
  }
}
