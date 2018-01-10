import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

  numSteps: Array<number> = [1,2,3,4,5];
  constructor() {

  }

  ngOnInit() {
  }

}
