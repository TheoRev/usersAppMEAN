import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../user';

@Component({
  selector: 'app-user-confirm-dialog',
  templateUrl: './user-confirm-dialog.component.html',
  styleUrls: ['./user-confirm-dialog.component.css']
})
export class UserConfirmDialogComponent implements OnInit {

  constructor(
    public confirDdialogRef: MatDialogRef<UserConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  deleteUser() {
    const index = this.data.users.indexOf(this.data.user);
    this.data.users.splice(index, 1);
    console.log(this.data.users);
    this.data.dataSource = new MatTableDataSource<User>(this.data.users);
    this.confirDdialogRef.close(this.data.dataSource);
  }

  cancel() {
    console.log('Cancel');
    this.confirDdialogRef.close(null);
  }

}
