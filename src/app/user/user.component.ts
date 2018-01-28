import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from './user.service';
import { User } from './user';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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

  constructor(private _userService: UserService, public dialog: MatDialog) { }

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
    this.openDialog();
  }

  editUser(us: User) {
    this.action = 'MODIFICAR';
    this.user = us;
    this.openDialog()
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogUserFormComponent, {
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

@Component({
  selector: 'app-dialog-user-form-component',
  templateUrl: 'dialog-user-form-component.html',
  styleUrls: ['dialog-user-form-component.css']
})
export class DialogUserFormComponent {

  hintlabel = 'El campo no puede estar vacio';

  constructor(
    public dialogRef: MatDialogRef<DialogUserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
  }

  execute() {
    const tempUser = this.data.user;
    if (tempUser.first_name !== '' && tempUser.last_name !== '' && tempUser.email !== '') {
      this.data.users.push(this.data.user);
      this.data.dataSource = new MatTableDataSource<User>(this.data.users);
      this.dialogRef.close(this.data.dataSource);
    }
  }

  cancel() {
    this.dialogRef.close(null);
  }
}
