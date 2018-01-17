import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule, BaseRequestOptions} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { WizardComponent } from './wizard/wizard.component';
import { Step1Component } from './components/step1/step1.component';
import { Step2Component } from './components/step2/step2.component';
import { Step3Component } from './components/step3/step3.component';
import { Step4Component } from './components/step4/step4.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuthGuardService }                from './services/auth-guard.service';
import { CanDeactivateGuard }                from './services/can-deactivate-guard.service';
import { RoutesService} from "./services/routes.service";
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
      WizardComponent,
      AppComponent,

    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
      HttpModule,
      ReactiveFormsModule
  ],
  providers: [
      AuthGuardService,
      RoutesService,
      CanDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
