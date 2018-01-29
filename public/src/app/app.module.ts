import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { UserService } from './user/user.service';
import { MaterialModule } from './material.module';
import { UserFormDialogComponent } from './user/user-form-dialog/user-form-dialog.component';
import { UserConfirmDialogComponent } from './user/user-confirm-dialog/user-confirm-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserFormDialogComponent,
    UserConfirmDialogComponent
    // DialogUserFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    // DialogUserFormComponent
    UserFormDialogComponent,
    UserConfirmDialogComponent
  ]
})
export class AppModule { }
