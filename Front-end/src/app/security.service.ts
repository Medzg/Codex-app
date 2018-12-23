import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      
      return true;
    }
    console.log(localStorage.getItem('currentUser'));
    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;

}
}
