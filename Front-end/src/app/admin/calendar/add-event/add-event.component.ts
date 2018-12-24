import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CalendarComponent } from '../calendar.component';
import { calcBindingFlags } from '@angular/core/src/view/util';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { ChildActivationEnd } from '@angular/router';
import { jourN } from 'src/app/jourN';
import {MethodsService} from '../../../methods.service';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

 


 
  

  nbr = new Array();
  nbrResponsables: number;
  values = '';
   x = 0 ;
  public form ={
    nbSalle : null,
    nbrRes: null,
    cin :  []  
  }


  constructor(public dialogRef: MatDialogRef<AddEventComponent>,public j:jourN,private method : MethodsService) {
    
  }
  test = this.j.name;

  ngOnInit() {
    console.log(this.test);
    
    
  }
  generate(){
    for (let index = 0; index < this.form.nbrRes; index++) {
      this.nbr[index]= index;
    }
  }
  onClose() {
    this.dialogRef.close();
  }

  ajouter(event: any){

   
      this.form.cin.push(event.target.value);
      console.log(this.form.cin[this.x]);
      this.x++;
    
  }
  onSubmit(){
   this.method.AjouterSea(this.form.nbSalle,this.form.nbrRes,this.form.cin,this.test).subscribe(res=>{
     if(res){
       console.log('works btich');
     }
     else{
       console.log('nope bitch');
     }
   })
  }

}