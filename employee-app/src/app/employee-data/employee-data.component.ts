import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeService, Employee } from '../services/employee.service';

@Component({
  selector: 'app-employee-data',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {
  employee: Employee = {
    id: 0,
    name: '',
    department: '',
    email: ''
  };

  id: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const paramId = this.route.snapshot.paramMap.get('id');
    this.id = paramId ? +paramId : null;
    
    if (this.id) {
      this.employeeService.getEmployeeById(this.id).subscribe({
        next: (data) => this.employee = data,
        error: (err) => console.error('Error fetching employee:', err)
      });
    }
  }

  saveEmployee(): void {
    if (this.id) {
      this.employeeService.updateEmployee(this.id, this.employee).subscribe(() => {
        this.router.navigate(['/employees']);
      });
    } else {
      this.employeeService.addEmployee(this.employee).subscribe(() => {
        this.router.navigate(['/employees']);
      });
    }
  }

  // ✅ Delete function added here
  deleteEmployee(): void {
    if (this.id && confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(this.id).subscribe(() => {
        alert('Employee deleted successfully');
        this.router.navigate(['/employees']); // Redirect back to the list
      });
    }
  }
}
