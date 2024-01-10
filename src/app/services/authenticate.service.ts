import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { BaseService } from './base.service';

let preUrl = 'ApiAccount';

export interface IUser {
    email: string;
    avatarUrl?: string;
}

const defaultPath = '/';
const defaultUser = {
    email: 'ghaempanah.s@gmail.com',
    avatarUrl: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png'
};

@Injectable({
    providedIn: 'root',
})

export class AuthenticateService {

    private _user: IUser | null = defaultUser;
    get loggedIn(): boolean {
        return !!this._user;
    }
    private _lastAuthenticatedPath: string = defaultPath;
    set lastAuthenticatedPath(value: string) {
        this._lastAuthenticatedPath = value;
    }

    constructor(private router: Router, public baseService: BaseService) {
    }

    async Login(body: any) {
        try {
            let result: any = await this.baseService.httpPOST(preUrl + '/login', body, true);
            return result
        } catch { }
        return null;
    }


    // async logIn(email: string, password: string) {
    //     try {
    //         // Send request
    //         this._user = { ...defaultUser, email };
    //         this.router.navigate([this._lastAuthenticatedPath]);
    //         return {
    //             isOk: true,
    //             data: this._user
    //         };
    //     }
    //     catch {
    //         return {
    //             isOk: false,
    //             message: "Authentication failed"
    //         };
    //     }
    // }

    async getUser() {
        try {
            // Send request

            return {
                isOk: true,
                data: this._user
            };
        }
        catch {
            return {
                isOk: false,
                data: null
            };
        }
    }

    async createAccount(email: string, password: string) {
        try {
            // Send request

            this.router.navigate(['/create-account']);
            return {
                isOk: true
            };
        }
        catch {
            return {
                isOk: false,
                message: "Failed to create account"
            };
        }
    }

    async changePassword(email: string, recoveryCode: string) {
        try {
            // Send request

            return {
                isOk: true
            };
        }
        catch {
            return {
                isOk: false,
                message: "Failed to change password"
            }
        }
    }

    async resetPassword(email: string) {
        try {
            // Send request

            return {
                isOk: true
            };
        }
        catch {
            return {
                isOk: false,
                message: "Failed to reset password"
            };
        }
    }

    async logOut() {
        this._user = null;
        this.router.navigate(['/login-form']);
    }
}

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private router: Router, private authenticateService: AuthenticateService) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        // const isLoggedIn = this.authenticateService.loggedIn;
        const isLoggedIn = this.authenticateService.loggedIn;
        const isAuthForm = [
            'login-form',
            'reset-password',
            'create-account',
            'change-password/:recoveryCode'
        ].includes(route.routeConfig?.path || defaultPath);

        if (isLoggedIn && isAuthForm) {
            this.authenticateService.lastAuthenticatedPath = defaultPath;
            this.router.navigate([defaultPath]);
            return false;
        }

        if (!isLoggedIn && !isAuthForm) {
            this.router.navigate(['/login-form']);
        }

        if (isLoggedIn) {
            this.authenticateService.lastAuthenticatedPath = route.routeConfig?.path || defaultPath;
        }

        return isLoggedIn || isAuthForm;
    }
}

