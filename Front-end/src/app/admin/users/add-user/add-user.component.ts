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
onSubmit(){
   this.methodsService.Ajouter(this.form.cin,this.form.username,this.form.password,this.form.type).subscribe(res=>{
     if(res){
       console.log('yes');

     }
     else{
       console.log("nope bitch");
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
