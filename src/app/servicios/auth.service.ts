import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
 
  isAuthenticated() {
    if(sessionStorage.getItem('token')){
      return true
    }
    else{ return false}
  }

  logOut(){
    sessionStorage.clear()
  }
}
