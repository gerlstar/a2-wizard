import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {RoutesService} from "./../services/routes.service";
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {
    listenChangesToStep: Subscription;
    private nextStep = 2;//default next step is 2
    private backStep = 1;//default back step is 1

    constructor(private router: Router, private routesService: RoutesService) {
        //lets listen to changes in the steps so that when we 'hear' it, then
        //we can change the template
        this.listenChangesToStep = routesService.changeInStepConfirmed$.subscribe(
            currentStep => {

                this.nextStep = currentStep + 1;
                this.backStep = currentStep - 1;
            }
        );
    }

    ngOnInit() {
    }

    public back(step: number) {

        const backStep = '/step' + step;
        this.router.navigate([backStep]);
    }

    public next(step: number) {

        const nextStep = '/step' + step;
        this.router.navigate([nextStep]);
    }

    ngOnDestroy() {

        this.listenChangesToStep.unsubscribe();
    }
}
