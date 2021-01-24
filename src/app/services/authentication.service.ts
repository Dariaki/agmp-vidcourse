import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ILogin, IUser } from '../modules/shared/interfaces/user.interface';
import { IToken } from '../modules/shared/interfaces/token.interface';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public authenticated$ = new BehaviorSubject(false);

  constructor(
    private httpClient: HttpClient
    ) { }

  get getIsAuthenticated$(): Observable<boolean> {
    this._processIsAuthenticated();
    return this.authenticated$;
  }

  // Method saves token to LS.
  public loginUser(user: ILogin): Observable<void> {
    // httpClient returns Observable, map returns another observable from data data received;
    return this.httpClient.post<IToken>('http://localhost:3004/auth/login', user)
      .pipe(
        map((token: IToken) => {
          localStorage.setItem('token', token.token);
          this.isAuthenticated().subscribe((isAuthenticated) => {
            this.authenticated$.next(isAuthenticated);
          })
        })
      )
  }

  public logoutUser() {
    localStorage.removeItem('token');
    this.isAuthenticated().subscribe((isAuthenticated) => {
      this.authenticated$.next(isAuthenticated);
    })
  }

  public isAuthenticated(): Observable<boolean> {
    return new Observable(subscriber => {
      let token = localStorage.getItem('token');
      subscriber.next(!!token);
    })
  }

  // post. After sending token we gets back userInfo
  public getUserInfo(): Observable<IUser> {
    let token = localStorage.getItem('token');
    return this.httpClient.post<IUser>('http://localhost:3004/auth/userinfo', { token })
  }

  private _processIsAuthenticated() {
    this.isAuthenticated().subscribe((isAuth) => {
      this.authenticated$.next(isAuth)
    })
  }
}
