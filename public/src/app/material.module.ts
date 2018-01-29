import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule
} from '@angular/material';

const modules = [
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule
];

@NgModule({
  imports: modules,
  exports: modules
})

export class MaterialModule { }
