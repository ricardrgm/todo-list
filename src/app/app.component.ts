import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from './model/item';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showFooter = true;
  itemList!: Item[];
  formGroup!:FormGroup;
  constructor(
    private fb:FormBuilder,
    private todoService: TodoService){  }

  ngOnInit(){
    this.formGroup = this.fb.group({
      id:[''],
      name:['', Validators.required],
      description:['',Validators.required]
    })
    this.todoService.getTotalItems$().subscribe(data => this.itemList = data )
  }
  toggleFooter(){
    this.showFooter = !this.showFooter;
  }
  updateItem(item:Item){
    this.todoService.updateItem(item);
  }
}
