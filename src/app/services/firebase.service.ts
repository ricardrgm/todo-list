import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  totalItems!: Observable<Item[]>
  constructor(private afs:AngularFirestore) { }

  gettotalItems$():Observable<Item[]> {
    this.totalItems = this.afs.collection<Item>('todo').valueChanges();
    return this.totalItems;
 }

 // updateItem(item: Item): void {
 //   //para detectar el cambio hay que ejecutar el método next del BehaviorSubject
 //   let urlItem = environment.api_url.concat(`${item.id}`);
 //   this.afs.put<Item>(urlItem, item).subscribe(() => this.refreshTODO$.next(undefined));
 // }

 // deletedItem(item: Item): void {
 //   //para detectar el cambio hay que ejecutar el método next del BehaviorSubject
 //   let urlItem = environment.api_url.concat(`${item.id}`);
 //   this.http.delete<Item>(urlItem).subscribe(() => this.refreshTODO$.next(undefined));
 // }

 addItem(item:Item):Promise<void>{
   let id = this.afs.createId();
   return this.afs.collection('todo').doc(id).set(item);
 }
}
