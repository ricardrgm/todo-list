import { AfterContentChecked, AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { MessageComponent } from './message/message.component';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, AfterContentInit, AfterContentChecked {
  @ContentChild(MessageComponent) errorMessage!:MessageComponent;
  constructor() { }

  ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked: ${this.errorMessage.message}`);
  }

  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit: ${this.errorMessage.message}`);
  }

  ngOnInit(): void {
  }

}
