import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  avatar: string = "assets/avatar.png";
  name: string = "MyName";
  occupation: string = "Developer";

  constructor() { }

  ngOnInit() {
  }

}
