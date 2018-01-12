import { Component, OnInit } from '@angular/core';
import {RoutesService} from "../../services/routes.service";

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {

    constructor(private routesService:RoutesService) {

        this.routesService.nextStep(4);
    }

    ngOnInit() {
  }

}
