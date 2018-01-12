import {Component, OnInit} from '@angular/core';
import {WizardComponent} from './wizard/wizard.component';
import {RoutesService} from "./services/routes.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [RoutesService]
})
export class AppComponent implements OnInit {
    title = 'app';
    private errorMessage: string;
    public routes: Array<any> = [];


    constructor(private routesService: RoutesService) {
        console.info('APP COMPONENT CONSTRUCTOR');
        this.routesService.retrieveRoutes('hi');
        routesService.routesRetrieved$.subscribe(
            astronaut => {
                this.routes.push(`${astronaut} confirmed the mission`);

            });
    }

    ngOnInit(): void {
        console.info('APP COMPONENT NGINIT')


    }
}
