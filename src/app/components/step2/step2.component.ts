import { Component, OnInit } from '@angular/core';
import {RoutesService} from "./../../services/routes.service";

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  constructor(private routesService:RoutesService) {
    // console.info(this.routesService.routes);
  }

  ngOnInit() {
  }

}
