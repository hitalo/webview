import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../services/layout-service/layout.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
  }


  toogleSideBar() {
    this.layoutService.toogleSideBar();
  }
}
