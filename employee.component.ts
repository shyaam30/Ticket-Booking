import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
employee:any;
salary:boolean=true;
constructor(private http:HttpClient){
  this.http.get("http://localhost:3000/employee").subscribe((data)=>{
    this.employee= data;
  });
}
Toogle(){
  this.salary=!this.salary;
}
}
