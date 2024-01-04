import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router) { }

    canActivate() {
        // if (this.baseService.authenticated) {
        //     return true;
        // }

        // let currentURL = this.baseService.pageUrl(this.router);
        // if (currentURL == '' || currentURL.startsWith('login') || currentURL.startsWith('password')) {
        //     this.navCtrl.navigateRoot('/login');
        // }
        // else {
        //     this.navCtrl.navigateRoot('/login?return=' + currentURL);
        // }
        // return false;
        return true;
    }
}