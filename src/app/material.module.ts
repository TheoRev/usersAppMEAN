import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

const modules = [
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: modules,
  exports: modules
})

export class MaterialModule { }
