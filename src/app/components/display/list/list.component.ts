import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Item } from 'src/app/model/item';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {

  @Input() formGroup!:FormGroup;
  @Input() itemList!:Item[];
  @Output() updateItemEvt = new EventEmitter();
  @Output() addItemEvt = new EventEmitter();
  @Output() deleteItemEvt = new EventEmitter();

  constructor(private dialog: MatDialog) { }

  openDialog(item:Item){
    const dialogConfig = new MatDialogConfig();

    this.formGroup.setValue(item);
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.formGroup;

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
    return dialogRef.afterClosed();

  }
  ngOnInit(): void {
  }

  openUpdateDialog(item:Item){

    this.openDialog(item).subscribe(
      data => this.updateItemEvt.emit(data)
    )

  }
  openInsertDialog(){
    this.openDialog(new Item()).subscribe(
      data => this.addItemEvt.emit(data)
    )
  }

  deleteEvent(item:Item){
    this.deleteItemEvt.emit(item);
  }

  ngOnChanges(changes:SimpleChanges){
    this.itemList.sort((a,b)=> b.id - a.id);
  }

}
