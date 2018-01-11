import {Component, OnInit, AfterContentInit} from '@angular/core';
import {RoutesService} from "./../services/routes.service";


@Component({
    selector: 'app-wizard',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit, AfterContentInit {
    private style1: boolean;
    numSteps: Array<number> = [1, 2, 3, 4, 5];

    constructor(private routesService: RoutesService) {
        this.style1 = true;
    }

    ngOnInit() {
        console.log('wizard...');
        // console.log(this.routesService);
        this.routesService.getRoutes()
            .subscribe(res => {
                console.log(this.routesService.routes)
            })
    }

    ngAfterContentInit(){
        console.info('routes =',this.routesService.routes);
    }

}
