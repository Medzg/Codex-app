import { Injectable } from '@angular/core';
import { Observer } from 'rxjs';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import {Taable} from './Taable';
import { MyData } from './my-data';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private uri = "http://localhost:8000/api/users";
  constructor(private http : Http) {}

  getPost():Observable<any[]> {
    return  this.http.get(this.uri).pipe(map(res => <MyData[]> res.json().result ));

  }




}
