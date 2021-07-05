import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  formGroup!:FormGroup;
  constructor(private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) data:FormGroup) { 
      this.formGroup = data;
      console.log(this.formGroup.value)
    }

  ngOnInit(): void {
  }

  close(){}
  save(){}

}
