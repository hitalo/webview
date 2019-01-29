import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $loggedIn = new Subject<boolean>();
  loggedIn: boolean = false;

  constructor(private router: Router) {
    this.$loggedIn.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });
  }

  login(){
      this.$loggedIn.next(true);
      this.router.navigate(['/u/carousel']);
  }

  logout() {                            
    this.$loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
