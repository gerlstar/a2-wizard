import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RoutesService {
    private errorMessage: string;
    public routes: Array<any>;
    private url = './../assets/json/routes.json';

    constructor(private http: Http) {
        console.log('routes service');
        // this.getRoutes()
        //     .subscribe(r => {
        //             // console.log(r);
        //             this.routes = (<any>r).ROUTES;
        //             // let tmp = routes.ROUTES;
        //             // this.routes = tmp;
        //             console.log(this.routes);
        //         },
        //         error => {
        //             this.errorMessage = <any>error
        //         });
    }

    public getRoutes(): Observable<any[]> {
        return this.http
            .get(this.url)
            .map((response: Response) => <any[]>response.json());

    }

    public setRoutes(){
        return this.getRoutes()
            .subscribe(r => {
                    // console.log(r);
                    this.routes = (<any>r).ROUTES;
                    // let tmp = routes.ROUTES;
                    // this.routes = tmp;
                    // console.log(this.routes);
                },
                error => {
                    this.errorMessage = <any>error
                });
    }

}
