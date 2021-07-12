import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { cItem, Item } from 'src/app/model/item';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
  @Input() itemList!: Item[];
  @Input() formGroup!: FormGroup;

  @Output() updateEvt = new EventEmitter();
  @Output() deletedEvt = new EventEmitter();
  @Output() addEvt = new EventEmitter();

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  private openDialog(item: Item = new cItem()): Observable<any> {
    const dialogConfig = new MatDialogConfig();
    this.formGroup.setValue(item);
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.formGroup;

    const dialogref = this.dialog.open(DialogComponent, dialogConfig);
    //when the closing method is executed with the value parameter, we can collect the data
    return dialogref.afterClosed();
  }

  openDialogUpdateItem(item: Item) {
    this.openDialog(item).subscribe(data=>{
      if (data != undefined){
        this.updateEvt.emit(data);
      }
    })
  }
  openDialogAddItem() {
    this.openDialog().subscribe(data=>{
      if (data != undefined){
        this.addEvt.emit(data);
      }
    })
  }

  openSnackBar(item: Item) {
    const miSnackBar = this.snackBar.open("Do you want to delete this element? (2s)", "delete", {
      duration: 2000
    });

    miSnackBar.onAction().subscribe(() => {
      console.log('The snack-bar action deleted was triggered!');
      if (item != undefined) {
        this.deletedEvt.emit(item);
      }
    });
  }

  // it's launched when any @INPUT is changed (@Input() itemList!: Item[];)
  ngOnChanges(changes:SimpleChanges):void{
    this.itemList?.sort((a:Item , b:Item) => b.orderId - a.orderId);
  }



}



