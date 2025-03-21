import { Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';

export const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', loadComponent: () => import('./components/employee/employee.component').then(m => m.EmployeeComponent) },
  { path: 'employee', component: EmployeeDataComponent },         // Add Employee
  { path: 'employee/:id', component: EmployeeDataComponent }      // Edit Employee
];
