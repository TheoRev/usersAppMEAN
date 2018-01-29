import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../user';

@Component({
  selector: 'app-user-form-dialog',
  templateUrl: './user-form-dialog.component.html',
  styleUrls: ['./user-form-dialog.component.css']
})
export class UserFormDialogComponent implements OnInit {

  hintlabel = 'El campo no puede estar vacio';

  constructor(
    public dialogRef: MatDialogRef<UserFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  execute() {
    const tempUser = this.data.user;
    if (tempUser.first_name !== '' && tempUser.last_name !== '' && tempUser.email !== '') {
      switch (this.data.action) {
        case 'NUEVO':
          this.createUser(tempUser);
          break;
        case 'MODIFICAR':
          this.updateUser(tempUser);
          break;
      }
    }
  }

  createUser(us: User) {
    this.data.users.push(this.data.user);
    this.data.dataSource = new MatTableDataSource<User>(this.data.users);
    this.dialogRef.close(this.data.dataSource);
  }

  updateUser(us: User) {
    const index = this.data.users.indexOf(this.data.user);
    const tempUs = this.data.users[index];
    tempUs['_id'] = us._id;
    tempUs['first_name'] = us.first_name;
    tempUs['last_name'] = us.last_name;
    tempUs['email'] = us.email;
    this.dialogRef.close(this.data.dataSource);
  }

  cancel() {
    this.dialogRef.close(null);
  }

}
