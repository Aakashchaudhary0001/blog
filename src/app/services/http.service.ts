import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders,HttpClient,HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class  HttpApiService {
    previousHtml: string=' ';
    user: any = {};
    constructor(
        private httpClient: HttpClient,
    ) { 
        // setInterval(this.checkUpdatesInCode, 10000);
    }

    private formatErrors(error: any) {
        return throwError(error.error);
    }

    // getUserFromLocalStorage(){
    //     if (localStorage.getItem('token')){
    //       this.user = JSON.parse(window.atob(localStorage.getItem('token')));
    //     }
    //     return this.user
    //   }
    getUserFromLocalStorage() {
        const token = localStorage.getItem('token');
        if (token) {
            this.user = JSON.parse(window.atob(token));
        }
        return this.user;
    }

    createAuthorizationHeader() {
        const headers = {} as { [key: string]: string };
        this.getUserFromLocalStorage();
        headers['Content-Type'] = 'application/json'
        let userId = this.user['customer_id'] ? this.user['customer_id'] + '' : '';
        let RoleId = this.user['Role'] ? this.user['Role'] + '' : '';
        headers['Access-Control-Allow-Orign'] = '*'
        headers['Access-Control-Allow-Credentials'] =  'true'
        const head = new HttpHeaders({'UserId':userId,'RoleId':RoleId})
        return head
    }

    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        let headers = this.createAuthorizationHeader();
        const options = { params: params, headers: headers }
        return this.httpClient.get(`${environment.apiUrl}${path}`, options)
            .pipe(catchError(this.formatErrors));
    }

    put(path: string, body: Object = {}): Observable<any> {
        let headers = this.createAuthorizationHeader();
        const options = { headers: headers }
        return this.httpClient.put(
            `${environment.apiUrl}${path}`,
            JSON.stringify(body),
            options
        ).pipe(catchError(this.formatErrors));
    }

    post(path: string, body: Object = {}): Observable<any> {
        let headers = this.createAuthorizationHeader();
        const options = { headers: headers }
        return this.httpClient.post(
            `${environment.apiUrl}${path}`,
            body,
            options
        ).pipe(catchError(this.formatErrors));
    }
    
}