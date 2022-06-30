import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutentificationService {
url: String ="http://challenge-react.alkemy.org/"


  constructor(private httpClient: HttpClient) { }

  iniciarSesion(credenciales: any): Observable<any> {
    return this.httpClient.post(this.url + "", credenciales).pipe(
      map((data) => {
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        /* this.currentUserSubject.next(data); */
        console.log("sessionStorage.getItem('currentUser')");
        return data;
        //comentario para ver
      })
    );
  }
}
