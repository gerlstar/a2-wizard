import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class RoutesService {
    private errorMessage: string;
    public routes: Array<any>;
    private url = './../assets/json/routes.json';
    private currentStep: number;

    // Observable string sources
    private retrieveRoutesSource$ = new Subject<any>();
    private changeInStepSource = new Subject<any>();

    // Observable string streams
    routesRetrieved$ = this.retrieveRoutesSource$.asObservable();
    changeInStepConfirmed$ = this.changeInStepSource.asObservable();

    constructor(private http: Http) {
        // this.retrieveRoutes('hi')
    }
        // Service message commands
    retrieveRoutes(mission: string) {
        //lets get the routes then send a stream to those that are listening

        this.getRoutes().subscribe(
            r => {
                this.routes = (<any>r).ROUTES;
                //
                this.retrieveRoutesSource$.next(this.routes);
            }
        )
    }

    nextStep(step:number) {
        this.changeInStepSource.next(step);
    }

    public setStep(step:number){
        this.currentStep = step;
    }

    public getCurrentStep(){
        return this.currentStep;
    }

    public getMission(){
        return this.retrieveRoutesSource$.asObservable();
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
