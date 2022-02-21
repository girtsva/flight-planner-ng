import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightFormComponent } from './pages/flight-form/flight-form.component';
import { FlightSearchComponent } from './pages/flight-search/flight-search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'flights',
    pathMatch: 'full'
  },
  {
    path: 'flights',
    children: [
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
      },
      {
        path: 'search',
        component: FlightSearchComponent
      },
      {
        path: 'add',
        component: FlightFormComponent
      },
      {
        path: 'edit/:id',
        component: FlightFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
