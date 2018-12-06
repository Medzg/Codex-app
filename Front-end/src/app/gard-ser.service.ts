import { Injectable } from '@angular/core';
import {Http, Headers, Response, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GardSerService {
  public token : string;

  constructor(private http:Http) {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
   }

  login(username :string , password : string) : Observable<string>{



    let headers = new Headers();
    headers.append('content-type', 'application/x-www-form-urlencoded');

     let result = JSON.stringify({'username':username ,'password':password});
     

     return this.http.post('http://127.0.0.1:8000/api/login', result ,{headers : headers} )
     .pipe(map((response: Response)=>{
       let code = response.json().code;
       if(code == '1'){
        this.token = response.json().token;
        localStorage.setItem('currentUser', JSON.stringify({ username: username, token: this.token }));
         return 'A';
       }
       else if(code == '2'){
        this.token = response.json().token;
        localStorage.setItem('currentUser', JSON.stringify({ username: username, token: this.token }));
         return  'P';
       }
       else
       {
        return 'E';
       }

       }))
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }
  


}
