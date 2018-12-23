import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-date',
  templateUrl: './edit-date.component.html',
  styleUrls: ['./edit-date.component.css']
})
export class EditDateComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditDateComponent>) { }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }
}
