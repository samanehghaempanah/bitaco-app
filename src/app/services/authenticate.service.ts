import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

let preUrl = 'ApiAccount';

@Injectable({
    providedIn: 'root',
})

export class AuthenticateService {

    constructor(public baseService: BaseService) {
    }

    async Login(body: any) {
        try {
            let result: any = await this.baseService.httpPOST(preUrl + '/login', body, true);
            return result
        } catch { }
        return null;
    }

}
