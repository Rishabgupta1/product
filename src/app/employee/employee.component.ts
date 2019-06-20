import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  emps : any[]= [

    {id: 1,name: 'Rishab',gender: 'male',role: 'Engineer'},
    {id: 2,name: 'Prateek',gender: 'male',role: 'Developer'},
    {id: 3,name: 'Scott',gender: 'male',role: 'Accountant'},
    {id: 4,name: 'Abhishek',gender: 'male',role: 'Angular'},
    {id: 5,name: 'Dev',gender: 'male',role: 'Sales_executive'},
    {id: 6,name: 'Unnati',gender: 'female',role: 'Trainer'}
    ];

}
