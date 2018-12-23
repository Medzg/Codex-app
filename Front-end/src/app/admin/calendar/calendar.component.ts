import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { AddEventComponent } from './add-event/add-event.component';
import { EditTimeComponent } from './edit-time/edit-time.component';
import { NewSessionComponent } from './new-session/new-session.component';
import { DeleteSessionComponent } from './delete-session/delete-session.component';
import { EditDateComponent } from './edit-date/edit-date.component';
import {MethodsService} from '../../methods.service';

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
  
  constructor(public dialog: MatDialog, private meth:MethodsService)  {}

  
  ngOnInit() {

    let type = this.meth.GetType().subscribe(res=>{

      
    });
 
  }

  event(){
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
}
