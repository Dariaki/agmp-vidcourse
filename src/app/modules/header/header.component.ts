import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { IUser } from '../shared/interfaces/user.interface';
import { Router } from '@angular/router';

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
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.authenticationService.getIsAuthenticated$.subscribe(isAuthenticated => {
      this.authenticated = isAuthenticated;
      console.log("AUTH??:",this.authenticated);
      if (this.authenticated) {
        this.authenticationService.getUserInfo().then(user => {
          this.userInfo = user
          this.userName = `${this.userInfo.name.first} ${this.userInfo.name.last}`;
        })
      }
    })
  }

  public logOff() {
    this.authenticationService.logoutUser();
    console.log(`Bye bye, ${this.userName}!`);
    this.authenticated = false;
    this.router.navigate(['/login'])
  }
}
