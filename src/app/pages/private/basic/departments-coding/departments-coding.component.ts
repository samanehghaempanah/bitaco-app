import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departments-coding',
  templateUrl: './departments-coding.component.html',
  styleUrls: ['./departments-coding.component.scss']
})
export class DepartmentsCodingComponent implements OnInit {

  pageData = {

    gridBoxValue: [] as number[],

    departments: [{
      "id": 1,
      "code": 100,
      "unitName": "واحد 1",
      "device": "دستگاه 1",
    },
    {
      "id": 2,
      "code": 101,
      "unitName": "واحد 2",
      "device": "دستگاه 2",
    },
    {
      "id": 3,
      "code": 102,
      "unitName": "واحد 3",
      "device": "دستگاه 3",
    },],

    customizeColumns(columns: any) {
      columns[0].width = 0;
      columns[1].caption = "شناسه";
      columns[2].caption = "نام واحد";
      columns[3].caption = "نام دستگاه";

      columns[1].alignment = 'center';
      columns[2].alignment = 'center';
      columns[3].alignment = 'center';
    },

    unitName: [{
      id: 1,
      name: 'چاپ روتوگراور',
    },
    {
      id: 2,
      name: 'چاپ فلکسوگراور'
    },
    {
      id: 3,
      name: 'لمینت',
    },
    {
      id: 4,
      name: 'برش',
    },
    {
      id: 5,
      name: 'پاکت سازی',
    },
    {
      id: 6,
      name: 'پانچ',
    },
    {
      id: 7,
      name: 'بوبین',
    },
    {
      id: 8,
      name: 'متالایزر',
    },
    {
      id: 9,
      name: 'تولید فیلم',
    }],
  }

  constructor() { }

  ngOnInit(): void {
  }

}