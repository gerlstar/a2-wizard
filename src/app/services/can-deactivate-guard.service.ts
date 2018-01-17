import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {
    Router, CanDeactivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import {Step1Component} from '../components/step1/step1.component';

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<Step1Component> {

    constructor() {
    }

    canDeactivate(component: Step1Component,route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<boolean> | boolean {
        // let url: string = state.url;
        //
        console.log(state.url);
        // return true;
        return component.canDeactivate ? component.canDeactivate() : true;
    }

}
