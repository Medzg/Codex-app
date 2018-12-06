import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { AddEventComponent } from './add-event/add-event.component';
import { EditTimeComponent } from './edit-time/edit-time.component';
import { EditSessionComponent } from './edit-session/edit-session.component';
import { NewSessionComponent } from './new-session/new-session.component';
import { DeleteSessionComponent } from './delete-session/delete-session.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
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

  onCreate(){
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true; 
    dialogConfig.width="100%";
    this.dialog.open(NewSessionComponent);
  }

  onEdit(){
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true; 
    dialogConfig.width="100%";
    this.dialog.open(EditSessionComponent);
  }

  onDelete(){
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true; 
    dialogConfig.width="100%";
    this.dialog.open(DeleteSessionComponent);
  }
}
