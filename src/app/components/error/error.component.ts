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

  ngOnInit(): void {
  }
  ngAfterContentInit(){
    console.log(this.errorMessage.message);
    this.errorMessage.message = this.errorMessage.message.toUpperCase();

  }

  ngAfterContentChecked(){
    console.log(this.errorMessage.message);
  }

}
