import { Component, ContentChild, OnInit } from '@angular/core';
import { MessageComponent } from './message/message.component';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  @ContentChild(MessageComponent) errorMessage!: MessageComponent;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentChecked() {
    console.log('------ngAfterContentChecked-----');
    console.log(this.errorMessage.message);
  }

  ngAfterContentInit() {
    console.log('------ngAfterContentInit-----');
    console.log(this.errorMessage.message);
    this.errorMessage.message = this.errorMessage.message.toUpperCase();
  }
}
