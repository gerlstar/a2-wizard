import { Injectable } from '@angular/core';
import { CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot }    from '@angular/router';
import {RoutesService} from "./../services/routes.service";

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private routeService: RoutesService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        console.log('AuthGuard#canActivate called', url);
        // console.log(this.routeService);
        // console.log(this.routeService.routes);

        if (url == '/step1'){
            // this.routeService.getRoutes().subscribe(
            //     result => {
            //         console.log((<any>result).ROUTES);
            //     }
            //
            // )

            console.log('Routes => ',this.routeService.routes);
        }else{
            console.log('Routes => ',this.routeService.routes);
        }

        return true;
    }
}