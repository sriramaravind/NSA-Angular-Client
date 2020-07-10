import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if (username === "ROOT" && password === "Admin$912" || username === "NSAUSER" && password === "letmein" ) {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  isRootLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log((user === "ROOT"))
    return (user === "ROOT")
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
    
}
