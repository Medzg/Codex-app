import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { AddEventComponent } from './add-event/add-event.component';
import { EditTimeComponent } from './edit-time/edit-time.component';
import { NewSessionComponent } from './new-session/new-session.component';
import { DeleteSessionComponent } from './delete-session/delete-session.component';
import { EditDateComponent } from './edit-date/edit-date.component';
import {MethodsService} from '../../methods.service';
import {jourN} from '../../jourN';
import { GetSes } from '../../GetSes';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  public rest ={
    id : null,
    type : null,
    dateD : null,
    dateF : null
  }

  typeSes :boolean ;
  test : string;
  
  constructor(public dialog: MatDialog, private meth:MethodsService,public j :jourN,public monses:GetSes)  {}

  
  ngOnInit() {

  this.meth.GetType().subscribe(res=>{
    if(res!='not'){
      if(res == 'DS'){
        this.typeSes = false;
      }
      else{
        this.typeSes = true;
      }
      
      
    
    }
  });
  
 




    

  }

  public try = false;
  value = '';
 
  event(event: any){
    this.j.name= event.target.attributes.name.value;
    console.log(this.j.name);
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true; 
    dialogConfig.width="100%";
    this.dialog.open(AddEventComponent);
  }

  horaire(){
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true; 
    dialogConfig.width="100%";
    this.dialog.open(EditTimeComponent);
  }


  date(){
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true; 
    dialogConfig.width="100%";
    this.dialog.open(EditDateComponent);
  }

  onCreate(){
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true; 
    dialogConfig.width="100%";
    this.dialog.open(NewSessionComponent);
  }


  onDelete(){
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true; 
    dialogConfig.width="100%";
    this.dialog.open(DeleteSessionComponent);
  }
  
  check(Z:string){
    
    this.meth.CheckSeason(Z).subscribe(res=>{
     if(res){
       console.log('true');
       return true;
     }
     
     console.log('false');
     
 

    });
  
   
  }
}
