import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogged$ = new BehaviorSubject<string | null>(null)

  constructor() { }
  login(userName: string, password: string) {
    localStorage.setItem('token', this.makeToken(userName, password))
    this.isLogged$.next(localStorage.getItem('token'))
  }
  makeToken(w1:string, w2:string): string {
    let token: string = ''
    for (let i = 0; i < 32; i++) {
      token = w1.charAt(Math.floor(Math.random()
        * w1.length)) +
        w2.charAt(Math.floor(Math.random()) * w2.length)
    }
    return token;
  }
}
