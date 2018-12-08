import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {MethodsService} from '../../../methods.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  public  form = {
    cin : null,
    username: null ,
    password : null,
    type : null
};
public sucess : boolean ;
public error : boolean;
onSubmit(){
   this.methodsService.Ajouter(this.form.cin,this.form.username,this.form.password,this.form.type).subscribe(res=>{
     if(res){
      this.sucess = true;

     }
     else{
       this.error = true;
     }
   });
  

}

  constructor(public dialogRef: MatDialogRef< AddUserComponent> , private methodsService: MethodsService) { }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }

  getValue(event){
    this.form.type = event.target.parentNode.innerText;
    
}
  
}
