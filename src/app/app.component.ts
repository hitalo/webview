import { Component, OnInit } from '@angular/core';
import { LayoutService } from './services/layout-service/layout.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'webview';

  active: boolean;
  $active: Observable<boolean>;

  constructor(private layoutService: LayoutService) {}

  ngOnInit() {
    this.$active = this.layoutService.$active;

    this.$active.subscribe(active => {
      this.active = active;
    });
  }
}
