import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IUser } from '../shared/interfaces/user.interface';
import { AuthenticationService } from '../../services/authentication.service';
import { DataLoaderService } from '../../services/data-loader.service';

@Component({
  selector: 'agmp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public authenticated = false;
  public userInfo: IUser;
  public userName = 'User';

  constructor(
    private authenticationService: AuthenticationService,
    private _dataLoaderService: DataLoaderService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.authenticationService.getIsAuthenticated$.subscribe(isAuthenticated => {
      this.authenticated = isAuthenticated;
      console.log("AUTH??:",this.authenticated);
      if (this.authenticated) {
        this._dataLoaderService.showDataLoader();
        this.authenticationService.getUserInfo().subscribe(user => {
          if (user) {
            setTimeout(() => {
              this.userInfo = user
              this.userName = `${this.userInfo.name.first} ${this.userInfo.name.last}`;
              this._dataLoaderService.hideDataLoader();
            }, 200)
          }
        })
      }
    })
  }

  public logOff() {
    this._dataLoaderService.showDataLoader();
    this.authenticationService.logoutUser()
    setTimeout(() => {
      this._dataLoaderService.hideDataLoader();
      console.log(`Bye bye, ${this.userName}!`);
      this.authenticated = false;
      this.router.navigate(['/login'])
    }, 200)
  }
}
