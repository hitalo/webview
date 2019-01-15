import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  active: boolean = false;
  $active = new Subject<boolean>();

  constructor() { }

  toogleSideBar() {
    this.active = !this.active;
    this.$active.next(this.active);
  }

}
