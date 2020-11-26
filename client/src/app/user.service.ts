import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators'
import { UserProfile } from './store/models/user-profile.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private BASE_URL = "http://localhost:32694/api/";

  constructor(private http: HttpClient) { }

  getCurrentUser() {
    return this.http.get<any>(this.BASE_URL+'users/currentuser').toPromise();
  }
}
