import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';

@Injectable({ providedIn: 'root'})
export class AuthorizationGuard implements CanActivate, CanActivateChild {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authenticationService.isAuthenticated()
      .pipe(
        map(isAuthorized => {
          if (isAuthorized) {
            return true
          } else {
            this.router.navigate(['/login'], {
              queryParams: {
                auth: false
              }
            })
          }
        })
      )
  }
  canActivateChild(): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate();
  }

}
