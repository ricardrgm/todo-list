import { switchMap, take } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable,pipe } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afs: AngularFirestore) { }

  getTotalItems$(): Observable<Array<Item>>{

    return this.afs.collection<Item>('todos').valueChanges();
    }



    updateItem(item:Item):Promise<void>{
      //para detectar el cambio hay que ejecutar el método next del BehaviorSubject
      return this.afs.collection<Item>('todos').doc(`${item.id}`).update(item)
    }

    async addItem(item:Item):Promise<any>{

     return  this.afs.collection('todos', ref => ref.orderBy("id", 'desc').limit(1)).valueChanges().pipe(take(1)).subscribe(
       (data:any) => {
         item.id = data[0].id+1;
         this.afs.collection<Item>('todos').doc(`${item.id}`).set(item)});
    }

    deleteItem(item:Item):Promise<void>{
      return this.afs.collection<Item>('todos').doc(`${item.id}`).delete();
    }
}
