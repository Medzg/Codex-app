import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource,MatPaginator,MatDialog, MatDialogConfig} from '@angular/material';
import {Taable} from '../../Taable';
import { TableService } from '../../table.service';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import {DataSource} from '@angular/cdk/collections';
import {MyData} from '../../my-data';
import { Observable } from 'rxjs';






/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-users',
  styleUrls: ['users.component.css'],
  templateUrl: 'users.component.html',
})

export class UsersComponent {

users : Array<MyData> =[];


  
  displayedColumns: string [] = ['id', 'cin', 'username','password','type'];
  dataSource = new UserDataSource(this.table);
  

  constructor(public dialog: MatDialog , private table : TableService) {}
  


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.table.getPost().subscribe(
      data =>{  this.users = data   
      });
 
  }


  onCreate(){
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true; 
    dialogConfig.width="100%";
    this.dialog.open(AddUserComponent);
  }

  onEdit(){
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true; 
    dialogConfig.width="100%";
    this.dialog.open(EditUserComponent);
  }

  onDelete(){
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true; 
    dialogConfig.width="100%";
    this.dialog.open(DeleteUserComponent);
  }
}

export class UserDataSource extends DataSource<any> {
  constructor(private  TableService : TableService) {
    super();
  }
  connect(): Observable<MyData[]> {
    return this.TableService.getPost();
}
disconnect() {}
}
