import { Component, OnInit, AfterViewInit } from '@angular/core';

interface carousel {
  img: string;
  title: string;
  subtitle: string;
  active?: boolean;
}

@Component({
  selector: 'app-corousel',
  templateUrl: './corousel.component.html',
  styleUrls: ['./corousel.component.scss']
})
export class CorouselComponent implements AfterViewInit {

  slide1: string = "assets/first.png";
  slide2: string = "assets/second.png";
  slide3: string = "assets/third.png";

  // placeholders: carousel[] = [{
  //   img: "assets/first.png",
  //   title: "First Slide",
  //   subtitle: "Such a boring slide!!!",
  //   active: true
  // }, {
  //   img: "assets/second.png",
  //   title: "Second Slide",
  //   subtitle: "... at least this one is in another color!!!"
  // }, {
  //   img: "assets/third.png",
  //   title: "Third Slide",
  //   subtitle: "... ok I am done!!!"
  // }];

  constructor() { }


  ngAfterViewInit() {
    // let car0 = document.getElementById("car0");
    // car0.classList.add("active");
  }

}
