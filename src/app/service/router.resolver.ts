import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';

@Injectable()
export class RouterResolver implements Resolve<any> {
    constructor() { }

    resolve(route: ActivatedRouteSnapshot) {
        const data = {
            params: route.paramMap['params'],
            queryParams: route.queryParamMap['params']
        };
        return data;
    }
}
