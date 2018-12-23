import { Component, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {MethodsService} from '../../../methods.service';

@Component({
  selector: 'app-new-session',
  templateUrl: './new-session.component.html',
  styleUrls: ['./new-session.component.css']
})
export class NewSessionComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<NewSessionComponent>,private methodsService: MethodsService) { }

  ngOnInit() {
  }
  
  public form = {
    type : null,
    DateD :null,
    DateF : null
};

  onClose() {
    this.dialogRef.close();
  }
  onSubmit(){
    this.methodsService.AjouterSes(this.form.DateD,this.form.DateF,this.form.type).subscribe(res=>{
      if(res){
        console.log('yes');
 
      }
      else{
        console.log("nope bitch");
      }
    });
  }
  getValue(event){
    this.form.type = event.target.parentNode.innerText;
    
}
}
  

