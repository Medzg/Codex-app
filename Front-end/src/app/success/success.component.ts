import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef< SuccessComponent>) { }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }
  

}
