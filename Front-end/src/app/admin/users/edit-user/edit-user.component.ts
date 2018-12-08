import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {MethodsService} from '../../../methods.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public  form = {
    cin : null,
    username: null ,
    password : null,
    type : null
};

  constructor(public dialogRef: MatDialogRef< EditUserComponent>,private Methods : MethodsService) { }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }
  onSubmit(){
    this.Methods.UpdateData(this.form.cin,this.form.username,this.form.password,this.form.type).subscribe(data=>{
      if(data){
        console.log('it work');
      }
      else{
        console.log('nope');
      }
    });
  }

  getValue(event){
    this.form.type = event.target.parentNode.innerText;
    console.log(this.form.type);
    
}
}

