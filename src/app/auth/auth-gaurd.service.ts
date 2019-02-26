import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGaurdService implements CanActivate {
    constructor (private auth: AuthService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const canActivate = this.auth.authenticateUser();
        if (!canActivate) {
            this.router.navigate(['/login']);
        }
        return canActivate;
    }
}
