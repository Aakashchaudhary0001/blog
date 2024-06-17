import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SignUpServiceService } from './services/sign-up-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerAuthGuardGuard implements CanActivate {
  constructor(private signUpService: SignUpServiceService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.signUpService.isSellerLoggedIn().pipe(
      // pipe() ek operator hai jo RxJS me observables par multiple operations chain 
      // karne ke liye use hota hai. Isme hum observables se emit hone wale data par mapping, 
      // filtering jaise operations apply kar sakte hain.
      map((isLoggedIn: boolean) => {
        if (isLoggedIn) {
          return true;
        } else {
          return false;
        }
      })
    );
  }
}
