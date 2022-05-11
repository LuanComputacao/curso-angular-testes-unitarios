import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LeadsComponent} from "./pages/leads/leads.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'leads',
    component: LeadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
