import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  user: any = {};

  constructor(
    
  ) { }
  getUserFromLocalStorage() {
    this.user = {};
    const token = localStorage.getItem('token');
    if (token !== null) {
        if (token.indexOf('customer') > -1) {
            localStorage.setItem('token', window.btoa(token));
        }
        this.user = JSON.parse(window.atob(token));
    } else {
        const user = localStorage.getItem('user');
        if (user !== null) {
            this.user = JSON.parse(user);
            this.setUserInLocalStorage(this.user);
        }
    }
    return this.user;
}

  setUserInLocalStorage(data: { [x: string]: any; }) {
    if (data['customer_id']) {
      if (localStorage.getItem('user')) {
        localStorage.removeItem('user');
      }
      localStorage.setItem('token', window.btoa(JSON.stringify(data)));
      this.getUserFromLocalStorage();
    }
}
}