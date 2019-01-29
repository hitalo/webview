import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  avatar: string = "assets/avatar.png";
  name: string = "MyName";
  occupation: string = "Developer";

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signOut() {
    this.authService.logout();
  }
}
