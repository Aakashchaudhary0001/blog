import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpApiService } from './http.service';
import { Observable } from 'rxjs';

import { Customer } from 'src/models/customer';

@Injectable({
  providedIn: 'root'
})
export class SignUpServiceService {
  url = environment.apiUrl || localStorage.getItem('ServerUrl');

  constructor(
    private http: HttpApiService,
 
  ) {}

  userSignUp(customer: Customer): Observable<any> {
    return this.http.post('customer/addNewCustomer', customer);
  }
  login(customer:Customer):Observable<any>{
    return this.http.post(`customer/authenticateLogin`,customer)
  }
}
