import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/model/item';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() item!:Item;
  @Input() odd!:boolean;

  @Output() deleteEvt= new EventEmitter();
  @Output() editEvt= new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  editItem(item:Item){
    this.editEvt.emit(item);
  }
  deleteItem(item:Item){
    this.deleteEvt.emit(item);
  }




}
