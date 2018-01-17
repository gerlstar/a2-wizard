import { Injectable } from '@angular/core';
import { CanActivate, Router,CanDeactivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot }    from '@angular/router';
import {RoutesService} from "./../services/routes.service";

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private routeService: RoutesService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;

        // console.log(state.url);
        return true;
    }


}