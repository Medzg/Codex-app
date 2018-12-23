import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-time',
  templateUrl: './edit-time.component.html',
  styleUrls: ['./edit-time.component.css']
})
export class EditTimeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditTimeComponent>) { }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }
}
