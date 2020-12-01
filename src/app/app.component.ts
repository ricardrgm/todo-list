import { FirebaseService } from './services/firebase.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Item } from './interfaces/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-hooks';
  showFooter = true;
  itemList: Item[];
  constructor(private fb:FormBuilder, private firebaseService: FirebaseService){

  }

  // @Output() output = new EventEmitter();

  formGroup: FormGroup;

  ngOnInit(){

    console.log('Soy un OnInit de AppComponent')
    this.formGroup = this.fb.group({
      orderId:['',Validators.required],
      name:['',Validators.required],
      description:['',Validators.required]
    });
    this.firebaseService.getTotalItems$().subscribe(data => {this.itemList = data
      console.log(this.itemList);} );



  }

  addItem(item:Item){
      this.firebaseService.addItem(item);/* .then(console.log); */
  }

  toggleFooter(){
    this.showFooter =!this.showFooter;
  }

}
