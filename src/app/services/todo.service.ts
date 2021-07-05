import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTotalItems$(): Observable<Array<Item>>{
      return this.http.get<Array<Item>>(environment.api_url);
  }

  addItems(){}

}
