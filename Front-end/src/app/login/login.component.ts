import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Http, Headers, Response, URLSearchParams} from '@angular/http';

import { detachEmbeddedView } from '@angular/core/src/view';
import { GardSerService } from '../gard-ser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Gestion de surveillance des examens';
    public  form = {
        usernames: null ,
        Passwor : null
    };
    public error ;

  constructor( private router: Router,private GardSerService : GardSerService) {

  }

  onSubmit() {
  
    this.GardSerService.login(this.form.usernames,this.form.Passwor).subscribe(res=>{

      if(res =='A'){
        this.router.navigate(['/admin/calendrier']);
      }
      else if(res == 'P'){
        this.router.navigate(['/prof/calendar']);
      }
      else{
        this.error = "check your user name and passowrd";
      }
    });
}
  ngOnInit() {
    this.GardSerService.logout();
  }

}
