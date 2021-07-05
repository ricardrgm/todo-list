import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatLineModule } from '@angular/material/core';
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule  } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
const material = [
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatLineModule,
  MatDialogModule,
  MatFormFieldModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...material
    
  ],
  exports: [
    ...material
  ]
})
export class MaterialModule { }
