import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WizardComponent } from './wizard/wizard.component';
import { Step1Component } from './components/step1/step1.component';
import { Step2Component } from './components/step2/step2.component';
import { Step3Component } from './components/step3/step3.component';
import { Step4Component } from './components/step4/step4.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuthGuardService }                from './services/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
      AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
