import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
//Creamos un observable "caliente"
  private refreshToDo$ = new BehaviorSubject(undefined);

  constructor(private http: HttpClient) { }

  getTotalItems$(): Observable<Array<Item>>{
  //Encadenamos la petición http.get que devuelve un observable frío al
  //observable caliente    
      return this.refreshToDo$.pipe(switchMap(_=>this.http.get<Array<Item>>(environment.api_url)));
  }

  addItems(){}

  updateItem(item:Item):void{
    //para detectar el cambio hay que ejecutar el método next del BehaviorSubject
    this.http.put<Item>(environment.api_url.concat(`${item.id}`),item).subscribe(()=>this.refreshToDo$.next(undefined));
  }

}
