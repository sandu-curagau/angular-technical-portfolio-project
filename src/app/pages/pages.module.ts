// Angular
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Pages
import { PagesRoutingModule } from './pages-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UiLibrariesComponent } from './ui-libraries/ui-libraries.component';
import { PrimengExamplesComponent } from './primeng-examples/primeng-examples.component';
import { MaterialExamplesComponent } from './material-examples/material-examples.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    UiLibrariesComponent,
    PrimengExamplesComponent,
    MaterialExamplesComponent
  ],
  providers: [Router, DatePipe],
  imports: [
    PagesRoutingModule
  ]
})
export class PagesModule { }
