import { Component, OnInit } from '@angular/core';
import {MethodsService} from '../../methods.service';

@Component({
  selector: 'app-edit-prof',
  templateUrl: './edit-prof.component.html',
  styleUrls: ['./edit-prof.component.css']
})
export class EditProfComponent implements OnInit {
  public form ={
    cin : null,
    username : null,
    passowrd : null
  }
  hide = true;
  constructor(private method :MethodsService) { }
  x = JSON.parse(localStorage.getItem('currentUser'));



 


  ngOnInit() {
   this.method.UserData(this.x.username)
   
   
    
    
   

 




  }

}
