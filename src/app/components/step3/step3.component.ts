import { Component, OnInit } from '@angular/core';
import {RoutesService} from "../../services/routes.service";

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {

    constructor(private routesService:RoutesService) {

        this.routesService.nextStep(3);
    }


    ngOnInit() {
  }

}
