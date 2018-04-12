import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MyFormComponent } from './my-form/my-form.component';
import { BgComponent } from './bg/bg.component';
import { IntroComponent } from './intro/intro.component';
import { SliderComponent } from './slider/slider.component';
import { MyForm2Component } from './my-form2/my-form2.component';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Try21Directive} from './intro/try21.directive';
import { RoutDirective } from './intro/rout.directive';
import { Rout2Directive } from './my-form/rout2.directive';
import { EmailValidationDirective } from './my-form/email-validation.directive';
import { Rout3Directive } from './my-form2/rout3.directive';
import { AsyncValidatorDirective } from './my-form2/async-validator.directive';
const routes = [
  {path: '', component: IntroComponent},
  {path: 'one', component: MyFormComponent},
  {path: 'two', component: MyForm2Component}
];

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    BgComponent,
    IntroComponent,
    SliderComponent,
    MyForm2Component,
    Try21Directive,
    RoutDirective,
    Rout2Directive,
    EmailValidationDirective,
    AsyncValidatorDirective,
    Rout3Directive
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
