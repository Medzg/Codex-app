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
public success : boolean ;
public error : boolean;

  constructor(public dialogRef: MatDialogRef< EditUserComponent>,private Methods : MethodsService) { }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }
  onSubmit(){
    this.Methods.UpdateData(this.form.cin,this.form.username,this.form.password,this.form.type).subscribe(data=>{
      if(data){
        this.success = true;
      }
      else{
       this.error = false;
      }
    });
  }

  getValue(event){
    this.form.type = event.target.parentNode.innerText;
    console.log(this.form.type);
    
}
}

