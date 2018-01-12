import {Component, OnInit,  AfterContentInit} from '@angular/core';
import {RoutesService} from "./../../services/routes.service";


@Component({
    selector: 'app-step1',
    templateUrl: './step1.component.html',
    styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit, AfterContentInit  {


    constructor(private routesService:RoutesService) {

        this.routesService.nextStep(1);
    }


    ngOnInit() {
        console.info('init');

    }

    ngAfterContentInit(){
        console.info('after view init')
    }
}
