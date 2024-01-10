import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { BaseService } from './services/base.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router, 
        private baseService: BaseService) { }

    canActivate() {
        if (this.baseService.authenticated) {
            return true;
        }

        let currentURL = this.baseService.pageUrl(this.router);
        if (currentURL == '' || currentURL.startsWith('login') || currentURL.startsWith('password')) {
            this.router.navigate(['/login']);
        }
        else {
            this.router.navigateByUrl('/login?return=' + currentURL);
        }
        return false;
    }
}