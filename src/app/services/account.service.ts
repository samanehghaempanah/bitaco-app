import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

let preUrl = 'ApiBase';

@Injectable({
    providedIn: 'root'
})

export class AccountService {

    constructor(public baseService: BaseService) { }

    async HTTP_Request(body: any) {
        try {
            let result: any = await this.baseService.httpPOST(preUrl + '/modification', body, true);
            return result
        } catch { }
        return null;
    }
}






