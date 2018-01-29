import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from './user.service';
import { User } from './user';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserFormDialogComponent } from './user-form-dialog/user-form-dialog.component';
import { UserConfirmDialogComponent } from './user-confirm-dialog/user-confirm-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title = 'Lista de Usuarios';
  action: string;
  display = false;
  loading = true;

  user = new User();

  public users: User[] = [
    new User(1, 'Theo', 'Revilla Fdz', 'theo@gmail.com'),
    new User(2, 'Almendra', 'Cárdenas', 'almendra@gmail.com'),
    new User(3, 'José', 'Rodriguez Fdz', 'pepe@gmail.com'),
  ];

  displayedColumns = ['id', 'name', 'ape', 'email', 'action'];
  dataSource = new MatTableDataSource<User>(this.users);

  constructor(private _userService: UserService, public dialog: MatDialog, public confirmDialog: MatDialog) { }

  ngOnInit() {
    // this.getUsers();
    this.loading = false;
    console.log(this.users);
  }

  getUsers() {
    this._userService.getUsers()
      .then(users => this.users = users);
  }

  newUser() {
    this.action = 'NUEVO';
    console.log(this.users);
    this.user = new User();
    this.openFormDialog();
  }

  editUser(us: User) {
    this.action = 'MODIFICAR';
    this.user = us;
    this.openFormDialog();
  }

  removeUser(us: User) {
    this.user = us;
    this.openConfirmDialog();
  }

  openConfirmDialog() {
    const dialogRef = this.confirmDialog.open(UserConfirmDialogComponent, {
      width: '600px',
      disableClose: true,
      data: { user: this.user, users: this.users, dataSource: this.dataSource }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dataSource = (result != null) ? result : this.dataSource;
    });
  }

  openFormDialog() {
    const dialogRef = this.dialog.open(UserFormDialogComponent, {
      width: '400px',
      disableClose: true,
      closeOnNavigation: false,
      data: { user: this.user, users: this.users, dataSource: this.dataSource, action: this.action }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.dataSource = (result != null) ? result : this.dataSource;
      // this.dialogResult = result;
    });
  }

  execute() {
    this.users.push(this.user);
    // this.user = null;
    this.display = false;
    // console.log(this.users);
    location.reload();
  }

  reload() {
    console.log(this.users);
    return this.users;
  }

}
