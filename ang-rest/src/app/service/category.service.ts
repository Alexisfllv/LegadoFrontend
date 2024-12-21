import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url: string = 'http://localhost:9090/categories';

  //variable httpClient = app.confing.ts > httpClient
  constructor(private http:HttpClient) { }

  //metodo para traer la listado

  getAll(){
    return this.http.get<any>(this.url);
  }
}
