import { Injectable } from '@angular/core';
import {Http, Headers, Response, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MethodsService {
  private uri = 'http://127.0.0.1:8000/api/';
  constructor(private http:Http) { }
  Ajouter (cin,username:string,password:string,type:string):Observable<boolean>{
    let headers = new Headers();
    headers.append('content-type', 'application/x-www-form-urlencoded');
     let result = JSON.stringify({'cin':cin,'username':username ,'password':password,'type':type});
     return this.http.post(this.uri+'create', result ,{headers : headers} )
     .pipe(map((response: Response)=>{
       let code = response.json().code;
       if(code == '1'){
         return true;
       }
       else{
         return false;
       }
       }));

  }

  UserData(username : string):object{
    
    let headers = new Headers();
    headers.append('content-type', 'application/x-www-form-urlencoded');
    let result = JSON.stringify({'username':username});
    return this.http.post(this.uri+'getOne', result ,{headers : headers} )
     .pipe(map((response: Response)=>{
      
      let code = response.json().code;
      let data = response.json();
      console.log(data.username);
        let x = {
          name : data.username,
          password : data.password,
          cin : data.cin
        }
        return x;
  }));
}

}
