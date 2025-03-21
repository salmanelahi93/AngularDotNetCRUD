import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';

const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeComponent },
  { path: 'employee', component: EmployeeDataComponent },         // For Add
  { path: 'employee/:id', component: EmployeeDataComponent }      // For Edit
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
