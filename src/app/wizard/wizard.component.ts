import {Component, OnInit, AfterContentInit, OnDestroy} from '@angular/core';
import {RoutesService} from "./../services/routes.service";
import { Subscription }   from 'rxjs/Subscription';

@Component({
    selector: 'app-wizard',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnDestroy {
    private style1: boolean;
    numSteps: Array<number> = [1, 2, 3, 4, 5];
    subscription: Subscription;
    listenChangesToStep: Subscription;
    mission = '';
    private currentStep = 1; //the first step

    constructor(private routesService: RoutesService) {

        console.info('---WIZARD COMPONENT CONSTRUCTOR');
        this.subscription = routesService.routesRetrieved$.subscribe(
            mission => {
                this.mission = mission;
                console.log(this.mission);
            });

        //lets listen to changes in the steps so that when we 'hear' it, then
        //we can change the template
        this.listenChangesToStep = routesService.changeInStepConfirmed$.subscribe(
            newStep => {
                // console.log('new step =',newStep);
                this.setNewStep(newStep);
            }
        );


    }

    setNewStep(step:number){
        this.currentStep = step;
        this.routesService.setStep(step);
    }


    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();

        this.listenChangesToStep.unsubscribe();
    }
}
