import { Component, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material';

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

  constructor(public dialogRef: MatDialogRef<AddEventComponent>) {
    
  }

  ngOnInit() {
    
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
    let z = JSON.stringify({'nbSalle':this.form.nbSalle,'nbRes':this.form.nbrRes,'array':this.form.cin});
    console.log(z);
  }
}