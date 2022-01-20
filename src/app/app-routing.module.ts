// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { PrimengExamplesComponent } from './pages/primeng-examples/primeng-examples.component';
import { MaterialExamplesComponent } from './pages/material-examples/material-examples.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { UiLibrariesComponent } from './pages/ui-libraries/ui-libraries.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing-page',
    pathMatch: 'full'
  },
  {
    path: 'landing-page',
    component: LandingPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'ui-libraries',
    children: [
      {
        path: '',
        component: UiLibrariesComponent,
        pathMatch: 'full'
      },
      {
        path: 'primeng',
        component: PrimengExamplesComponent,
        pathMatch: 'full'
      },
      {
        path: 'material',
        component: MaterialExamplesComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
