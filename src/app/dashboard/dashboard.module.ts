import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLandingComponent } from './dashboard-landing/dashboard-landing.component';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [
    DashboardLandingComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    DashboardLandingComponent
  ]
})
export class DashboardModule { }
