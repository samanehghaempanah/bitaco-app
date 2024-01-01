import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-production-activities',
  templateUrl: './production-activities.component.html',
  styleUrls: ['./production-activities.component.scss']
})
export class ProductionActivitiesComponent implements OnInit {

  pageData = {

    gridBoxValue: [] as number[],

    activities: [{
      "id": 1,
      "code": 100,
      "name": "فعالیت 1",
      "description": "توضیحات",
    },
    {
      "id": 2,
      "code": 100,
      "name": "فعالیت 2",
      "description": "توضیحات",
    },
    {
      "id": 3,
      "code": 100,
      "name": "فعالیت 3",
      "description": "توضیحات",
    },],

    customizeColumns(columns: any) {
      columns[0].width = 0;
      columns[1].caption = "کد فعالیت";
      columns[2].caption = "نام فعالیت";
      columns[3].caption = "توضیحات";

      columns[1].alignment = 'center';
      columns[2].alignment = 'center';
      columns[3].alignment = 'center';
    },

    activityType: [{
      id: 1,
      name: 'فعال',
    },
    {
      id: 2,
      name: 'متوقف'
    }],
  }

  constructor() { }

  ngOnInit(): void {
  }

}