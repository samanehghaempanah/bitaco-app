import { Component, OnInit } from '@angular/core';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-work-shifts',
  templateUrl: './work-shifts.component.html',
  styleUrls: ['./work-shifts.component.scss']
})
export class WorkShiftsComponent implements OnInit {

  pageData = {
    gridBoxValue: [] as number[],
    now: new Date() as Date,

    shifts: [{
      "id": 1,
      "code": 100,
      "name": "شیفت 1",
      "startTime": moment(new Date().getTime()).locale('fa').format('hh:mm'),
      "endTime": moment(new Date().getTime()).locale('fa').format('hh:mm'),
      "restTime": 30 + ' دقیقه',
      "description": "توضیحات",
    },
    {
      "id": 2,
      "code": 101,
      "name": "شیفت 2",
      "startTime": moment(new Date().getTime()).locale('fa').format('hh:mm'),
      "endTime": moment(new Date().getTime()).locale('fa').format('hh:mm'),
      "restTime": 40 + ' دقیقه',
      "description": "توضیحات",
    },
    {
      "id": 3,
      "code": 103,
      "name": "شیفت 3",
      "startTime": moment(new Date().getTime()).locale('fa').format('hh:mm'),
      "endTime": moment(new Date().getTime()).locale('fa').format('hh:mm'),
      "restTime": 50 + ' دقیقه',
      "description": "توضیحات",
    },],

    customizeColumns(columns: any) {
      columns[0].width = 0;
      columns[1].caption = "کد شیفت";
      columns[2].caption = "نام شیفت";
      columns[3].caption = "شروع";
      columns[4].caption = "پایان";
      columns[5].caption = "زمان استراحت";
      columns[6].caption = "توضیحات";

      columns[1].alignment = 'center';
      columns[2].alignment = 'center';
      columns[3].alignment = 'center';
      columns[4].alignment = 'center';
      columns[5].alignment = 'center';
      columns[6].alignment = 'center';
    },
  }

  constructor() { }

  ngOnInit(): void {
  }
}