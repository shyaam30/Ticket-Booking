import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  {
    path: "home",
    component:HomeComponent
  },
  {
    path:"employee",
    component:EmployeeComponent
  },
  {
    path:"ticket",
    component:TicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
