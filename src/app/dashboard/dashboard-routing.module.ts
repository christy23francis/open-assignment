import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLandingComponent } from './dashboard-landing/dashboard-landing.component';

const Dashboardroutes: Routes = [
    {
        path: '',
        component: DashboardLandingComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(Dashboardroutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
