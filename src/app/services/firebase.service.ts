import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afs: AngularFirestore) { }

  addItem(item: Item): Promise<void>{
    item.id = this.afs.createId();
    return this.afs.collection<Item>('todos').doc(item.id).set(item);
  }

  getTotalItems$(): Observable<Item[]>{
    return this.afs.collection<Item>('todos').valueChanges();
  }
}

