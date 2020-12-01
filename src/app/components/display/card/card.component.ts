import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item: any;
  @Input() odd: boolean;
  @Input() even: boolean;

  @Output() deleteOut = new EventEmitter();
  @Output() editOut = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  editItem(){}
  deleteItem(){}

}
