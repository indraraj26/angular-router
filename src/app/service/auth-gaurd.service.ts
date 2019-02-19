import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild } from '@angular/router';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

    constructor(public auth: AuthenticationService, private router: Router) { }

    canActivate(): Observable<boolean> {
        this.auth.isLoggedIn();
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/login');
            return of(false);
        }
        return of(true);
    }

    canActivateChild(): Observable<boolean> {
        this.auth.isLoggedIn();
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/login');
            return of(false);
        }
        return of(true);
    }
}
