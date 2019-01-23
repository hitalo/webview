import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corousel',
  templateUrl: './corousel.component.html',
  styleUrls: ['./corousel.component.scss']
})
export class CorouselComponent implements OnInit {

  slide1: string = "assets/first.png";
  slide2: string = "assets/second.png";
  slide3: string = "assets/third.png";

  constructor() { }

  ngOnInit() {
  }

}
