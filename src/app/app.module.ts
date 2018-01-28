import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { UserService } from './user/user.service';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
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
  ]
})
export class AppModule { }
