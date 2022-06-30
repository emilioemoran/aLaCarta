import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  url: String = 'https://api.spoonacular.com/recipes/complexSearch?query=italian&number=4';

 
  constructor(private http:HttpClient) { }
  
  getMenu(): Observable<any> {
    return this.http.get<any>(this.url + '');
  }

  getItemDetail(id : number){
    return this.http.get<any>('https://api.spoonacular.com/recipes/'+ id +'/information')
  }

  getItemsByType(tipoCocina : String){
    return this.http.get<any>('https://api.spoonacular.com/recipes/complexSearch?cuisine='+ tipoCocina)
  }

}
