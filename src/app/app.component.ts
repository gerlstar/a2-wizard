import {Component, OnInit} from '@angular/core';
import {WizardComponent} from './wizard/wizard.component';
import {RoutesService} from "./services/routes.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    private errorMessage: string;
    public routes: Array<any>;


    constructor(private routesService: RoutesService) {

    }

    ngOnInit(): void {
        console.info('Setting the routes...')
        this.routesService.setRoutes()
            // .subscribe(r => {
            //         console.log((<any>r).ROUTES);
            //
            //         this.routesService.routes = (<any>r).ROUTES;
            //         // console.log(r);
            //         // this.routes = (<any>r).ROUTES;
            //         // let tmp = routes.ROUTES;
            //         // this.routes = tmp;
            //         // console.log(r);
            //     },
            //     error => {
            //         this.errorMessage = <any>error
            //     });

    }
}
