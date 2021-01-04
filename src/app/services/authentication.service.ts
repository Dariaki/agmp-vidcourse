import { Injectable } from '@angular/core';
import { ILogin, IUser } from '../modules/shared/interfaces/user.interface';
import { IToken } from '../modules/shared/interfaces/token.interface';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public authenticated$ = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) { }

  get getIsAuthenticated$(): Observable<boolean> {
    this._processIsAuthenticated();
    return this.authenticated$
  }

  // Method saves token to LS.
  public loginUser(user: ILogin): Promise<void> {
    // httpClient returns Observable, loginUser method returns promise
    return this.httpClient.post<IToken>('http://localhost:3004/auth/login', user)
      .toPromise()
      .then((token: IToken) => {
        localStorage.setItem('token', token.token);
        this.isAuthenticated().then(isAuthenticated => {
          this.authenticated$.next(isAuthenticated);
        })
      })
  }

  public logoutUser() {
    localStorage.removeItem('token');
    this.isAuthenticated().then(isAuthenticated => {
      this.authenticated$.next(isAuthenticated);
    })
  }

  public isAuthenticated(): Promise<boolean> {
    return new Promise(resolve => {
      let token = localStorage.getItem('token');
      resolve(!!token)
    })
  }

  // post. After sending token we gets back userInfo
  public getUserInfo() {
    let token = localStorage.getItem('token');
    return this.httpClient.post<IUser>('http://localhost:3004/auth/userinfo', { token })
      .toPromise()
  }

  private _processIsAuthenticated(): Observable<void> {
    return from(this.isAuthenticated().then(isAuth => {
      this.authenticated$.next(isAuth)
    }));
  }
}
