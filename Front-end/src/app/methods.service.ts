import { Injectable } from '@angular/core';
import {Http, Headers, Response, URLSearchParams} from '@angular/http';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetSes } from './GetSes';

@Injectable({
  providedIn: 'root'
})
export class MethodsService {
  private uri = 'http://127.0.0.1:8000/api/';
  constructor(private http:Http,public GetS : GetSes) { }
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
GetType():Observable<string>{
  
  return this.http.get(this.uri+'getSes').pipe(map((response:Response)=>{
    let data = response.json();
    if(data.code == 1){
       let res = data.message;
      return res
      
    }
    else{
     let res  = 'not';
      return res;
    }
  }))

}


AjouterSes (DateD:string,DateF:string,type:string):Observable<boolean>{
  let headers = new Headers();
  headers.append('content-type', 'application/x-www-form-urlencoded');
   let result = JSON.stringify({'DateD':DateD, 'DateF':DateF ,'type':type});
   return this.http.post(this.uri+'createSes', result ,{headers : headers} )
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
AjouterSea(nbSalle :string,nbrRes:string,cin:Array<string> ,JourS:string):Observable<boolean>{
  let headers = new Headers();
  headers.append('content-type', 'application/x-www-form-urlencoded');
  let send = JSON.stringify({'nbSalle':nbSalle,'nbRes':nbrRes,'cin':cin,'JourS':JourS});
  return this.http.post(this.uri+'createSeas',send,{headers:headers}).pipe(map((response:Response)=>{
    let code = response.json().code;
    if(code=='1'){
      return true;
    }
    else{
      return false;
    }
  }));

}

CheckSeason(Jours:string):Observable<boolean>{
  let headers = new Headers();
  headers.append('content-type', 'application/x-www-form-urlencoded');
  let send = JSON.stringify({'JourS':Jours});
  return this.http.post(this.uri+'getSea',send,{headers:headers}).pipe(map((response:Response)=>{
    let code = response.json().code;
    if(code=='1'){
      return true;
    }
    else{
      return false;
    }
  }));
}
}
