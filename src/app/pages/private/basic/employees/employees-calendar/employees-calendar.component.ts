import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-calendar',
  templateUrl: './employees-calendar.component.html',
  styleUrls: ['./employees-calendar.component.scss']
})
export class EmployeesCalendarComponent implements OnInit {

  pageData = {}

  constructor() { }

  ngOnInit(): void {
  }
}