import { Injectable } from '@angular/core';
import { Item } from '../model/item';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
//Componentes libreria rxjs
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  totalItems!: Observable<Item[]>

  // crear un observable "hot" : por defecto los observables "cold" no se refrescan, http client devuelve un "cold".
  private refreshTODO$ = new BehaviorSubject(undefined);

  constructor(private http: HttpClient) { }


  gettotalItems$(): Observable<Item[]> {
    //Encadenamos la petición http.get que devuelve un observable frío al
    //observable caliente.
    this.totalItems = this.refreshTODO$.pipe(switchMap(_ => this.http.get<Item[]>(environment.api_url)));
    //  this.totalItems = this.http.get<Item[]>(environment.api_url);
    return this.totalItems;
  }

  updateItem(item: Item): void {
    //para detectar el cambio hay que ejecutar el método next del BehaviorSubject
    let urlItem = environment.api_url.concat(`${item.id}`);
    this.http.put<Item>(urlItem, item).subscribe(() => this.refreshTODO$.next(undefined));
  }

  deletedItem(item: Item): void {
    //para detectar el cambio hay que ejecutar el método next del BehaviorSubject
    let urlItem = environment.api_url.concat(`${item.id}`);
    this.http.delete<Item>(urlItem).subscribe(() => this.refreshTODO$.next(undefined));
  }
  addItem(item:Item):void{
    this.http.post<Item>(environment.api_url, item).subscribe(()=>this.refreshTODO$.next(undefined));
  }
}
