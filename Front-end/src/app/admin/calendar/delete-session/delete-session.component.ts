import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-session',
  templateUrl: './delete-session.component.html',
  styleUrls: ['./delete-session.component.css']
})
export class DeleteSessionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteSessionComponent>) { }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }

}
