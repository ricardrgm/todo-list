import { AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

import { Item } from 'src/app/model/item';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges, AfterViewChecked {

  @Input() formGroup!:FormGroup;
  @Input() itemList!:Item[];
  @Output() updateItemEvt = new EventEmitter();
  @Output() addItemEvt = new EventEmitter();
  @Output() deleteItemEvt = new EventEmitter();
  @ViewChild(MatIcon) matIcon!: MatIcon;

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
    console.log(this.itemList);
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
    this.itemList?.sort((a,b)=> b.id - a.id);
  }

  ngAfterViewChecked(){
    if(this.itemList?.length==0){
    this.matIcon.color = 'accent'}
    else{
      this.matIcon.color = 'primary'
    };
  }
}
