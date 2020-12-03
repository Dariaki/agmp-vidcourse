import { Component, OnInit } from '@angular/core';
// import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'agmp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public searchValue: string;
  public authenticated = true;

  constructor(
    // private authenticationService: AuthenticationService
  ) {
    // this.authenticationService.getAuthenticated().subscribe(isAuthenticated => {
    //   console.log('isAuthenticated:', isAuthenticated);
    //   this.authenticated = isAuthenticated;
    // })
  }

  ngOnInit(): void {
  }

  processSearch(search: string) {
    this.searchValue = search;
  }
}
