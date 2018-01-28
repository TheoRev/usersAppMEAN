import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  // action = this._userService.action;
  // display = this._userService.display;

  constructor(private _userService: UserService, public dialogRef: MatDialogRef<UserNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.dialogRef.close();
  }

}
