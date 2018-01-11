import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Step1Component } from './components/step1/step1.component';
import { Step2Component } from './components/step2/step2.component';
import { Step3Component } from './components/step3/step3.component';
import { Step4Component } from './components/step4/step4.component';
import { AuthGuardService }                from './services/auth-guard.service';


const routes: Routes = [
    { path: '', redirectTo: '/step1', pathMatch: 'full' },
    {
        path: 'step2',
        component: Step2Component,
        canActivate: [AuthGuardService]
    },
    { path: 'step1', component: Step1Component,

    canActivate: [AuthGuardService]},
    { path: 'step3', component: Step3Component,

    canActivate: [AuthGuardService]},
    { path: 'step4', component: Step4Component,

    canActivate: [AuthGuardService]}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}
