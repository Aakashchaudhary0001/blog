import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpApiService } from './http.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from 'src/models/customer';

@Injectable({
  providedIn: 'root'
})
export class SignUpServiceService {
  url = environment.apiUrl || localStorage.getItem('ServerUrl');
 private sellerLoggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('seller'));
  constructor(
    private http: HttpApiService,
 
  ) {}
  

  userSignUp(customer: Customer): Observable<any> {
    return this.http.post('customer/addNewCustomer', customer);
  }
  login(customer:Customer):Observable<any>{
    return this.http.post(`customer/authenticateLogin`,customer)
  }

  isSellerLoggedIn(): Observable<boolean> {
    return this.sellerLoggedIn.asObservable();
  }

  setSellerLoggedIn(loggedIn: boolean): void {
    this.sellerLoggedIn.next(loggedIn);
  }
}
