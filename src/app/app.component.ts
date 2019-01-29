import { Component, OnInit } from '@angular/core';
import { LayoutService } from './services/layout-service/layout.service';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'webview';

  active: boolean;
  $active: Observable<boolean>;
  loggedIn: boolean;
  $loggedIn: Observable<boolean>;

  constructor(private layoutService: LayoutService, private authService: AuthService) {}

  ngOnInit() {

    this.$active = this.layoutService.$active;
    this.$active.subscribe(active => {
      this.active = active;
    });

    this.$loggedIn = this.authService.$loggedIn;
    this.$loggedIn.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });

  }
}
