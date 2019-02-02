import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(public auth: AuthenticationService, private router: Router) { }

    canActivate(): Observable<boolean> {
        this.auth.isLoggedIn();
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/login');
            return of(false);
        }
        return of(true);
    }
}
