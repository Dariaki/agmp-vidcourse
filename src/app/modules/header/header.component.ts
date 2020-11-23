import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { IUser } from '../shared/interfaces/user.interface';

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
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.authenticationService.authenticated$.subscribe(isAuthenticated => {
      this.authenticated = isAuthenticated;

      if (this.authenticated) {
        this.userInfo = this.authenticationService.getUserInfo();
        this.userName = this.userInfo.name;
      }
    })
  }

  public logOff() {
    this.authenticationService.logoutUser();
    console.log(`Bye bye, ${this.userName}!`);
    this.authenticated = false;
  }
}
