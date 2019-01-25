import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sampletab',
  templateUrl: './sampletab.component.html',
  styleUrls: ['./sampletab.component.scss']
})
export class SampletabComponent implements OnInit {

  id: string = '0';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  setID(id: string) {
    this.id = id;
  }

  setIDandRoute(id: string) {
    this.id = id;
    this.router.navigate(['/sample-tab', 'cards']);
  }

}
