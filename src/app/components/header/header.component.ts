import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'agmp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  authenticated = true;

  constructor() { }

  ngOnInit(): void {
  }

}