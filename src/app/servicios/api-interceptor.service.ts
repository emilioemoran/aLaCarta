import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,  HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { MenuService } from './menu.service';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService implements HttpInterceptor {

  constructor(private menuService: MenuService) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url == "http://challenge-react.alkemy.org/"){
    return next.handle(req);
    }
    let authReq = req.clone({
               /*  setHeaders:{"x-Api-Key": "6fd46836d03746bb89f8888821c7d010",}, */
                setParams:{"apiKey": "6fd46836d03746bb89f8888821c7d010",}
      });
      return next.handle(authReq).pipe(
      catchError((error) => {
        console.log('Returning caught observabl');
        return throwError(error);
      })
      );
  }
}
