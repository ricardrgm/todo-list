import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item!:Item;
  @Output() additemEvt= new EventEmitter();

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

 addItem(item:Item){
  this.additemEvt.emit(item);
 }

}
