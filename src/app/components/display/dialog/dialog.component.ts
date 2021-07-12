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

  constructor(
    private dialogref:MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) data:FormGroup
    ) {
      this.formGroup=data;
     }

  ngOnInit(): void {

  }
  close(){
    this.dialogref.close();
  }
  save(){
    this.dialogref.close(this.formGroup.value);
  }

}
