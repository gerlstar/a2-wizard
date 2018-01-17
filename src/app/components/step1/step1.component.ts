import {Component, OnInit,  OnDestroy} from '@angular/core';
import {RoutesService} from "./../../services/routes.service";
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import {NG_VALIDATORS, Validators} from '@angular/forms';

@Component({
    selector: 'app-step1',
    templateUrl: './step1.component.html',
    styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit, OnDestroy {
    listenToNext: Subscription;
    form:FormGroup;

    constructor(private routesService:RoutesService) {

        //this informs the wizard component so that it knows what step to highlight
        this.routesService.nextStep(1);

        this.listenToNext = routesService.changeInStepConfirmed$.subscribe(
            currentStep => {

                console.log(currentStep)
            }
        );
    }

    ngOnInit() {
        console.info('init');
        this.form = new FormGroup({

            fundName: new FormControl('', Validators.required)
        });
    }

    onSubmit(form){
        console.log(form);
    }

    ngOnDestroy() {

        this.listenToNext.unsubscribe();
    }




    canDeactivate(): Observable<boolean> | boolean {
        console.log('can deactivate');
        console.log(this.form);
        //if form is valid then we can go on the next screen
        return this.form.valid;
    }
    //
    // ngAfterContentInit(){
    //     console.info('after view init')
    // }
}
