import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Item } from './model/item';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-todo-list';
  itemList!: Item[];
  showfooter: boolean = true;
  formGroup!: FormGroup;

  constructor(
    private todoService: TodoService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      id:[''],
      name:[''],
      description:['']
    });

    this.todoService.gettotalItems$().subscribe(data => this.itemList = data)
  }

  toggleFooter() {
    this.showfooter = !this.showfooter;
  }

  updateItem(item: Item) {
    this.todoService.updateItem(item);//.subscribe(data => console.log(data))
  }

  deletedItem(item: Item){
    this.todoService.deletedItem(item);
  }

  addItem(item: Item){
    this.todoService.addItem(item);
  }


}
