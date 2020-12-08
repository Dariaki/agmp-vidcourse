import { Injectable } from '@angular/core';
import { IUser } from '../modules/shared/interfaces/user.interface';
import { BehaviorSubject, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public authenticated$ = new BehaviorSubject(false);

  constructor() { }

  get getIsAuthenticated$(): Observable<boolean> {
    this._processIsAuthenticated();
    return this.authenticated$
  }

  public loginUser(user: IUser) {
    localStorage.setItem('user', JSON.stringify(user));
    this.isAuthenticated().then(isAuthenticated => {
      this.authenticated$.next(isAuthenticated);
    })
  }

  public logoutUser() {
    localStorage.removeItem('user');
    this.isAuthenticated().then(isAuthenticated => {
      this.authenticated$.next(isAuthenticated);
    })
  }

  public isAuthenticated(): Promise<boolean> {
    return new Promise(resolve => {
      let userInfo = localStorage.getItem('user');
      let userInfoParsed = JSON.parse(userInfo);
      resolve(!!userInfoParsed)
    })
  }

  public getUserInfo() {
    let userInfo = localStorage.getItem('user');
    return JSON.parse(userInfo);
  }

  private _processIsAuthenticated(): Observable<void> {
    return from(this.isAuthenticated().then(isAuth => {
      this.authenticated$.next(isAuth)
    }));
  }
}
