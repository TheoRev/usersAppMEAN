import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UserComponent, DialogUserFormComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { UserService } from './user/user.service';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserNewComponent,
    UserListComponent,
    UserEditComponent,
    UserDetailsComponent,
    DialogUserFormComponent
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
    DialogUserFormComponent
  ]
})
export class AppModule { }
