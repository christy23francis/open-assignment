import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLandingComponent } from './dashboard-landing/dashboard-landing.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardLandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
