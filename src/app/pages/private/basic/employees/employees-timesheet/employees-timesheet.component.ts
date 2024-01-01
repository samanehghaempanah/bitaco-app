import { Component, OnInit } from '@angular/core';
import * as moment from 'jalali-moment';
import { EmployeeModel } from 'src/app/shared/definitions/models/entities.model';

@Component({
  selector: 'app-employees-timesheet',
  templateUrl: './employees-timesheet.component.html',
  styleUrls: ['./employees-timesheet.component.scss']
})
export class EmployeesTimesheetComponent implements OnInit {

  pageData = {
    selectedDepartment: '' as string,
    selectedMonth: null as any,
    selectedFromDate: null as any,
    selectedToDate: null as any,
    selectedEmployee: {} as EmployeeModel,
    showTimeSheetDetails: false,

    department: [{
      id: 1,
      name: 'اداری',
    },
    {
      id: 2,
      name: 'تولید',
    },
    {
      id: 3,
      name: 'طراحی',
    },
    {
      id: 4,
      name: 'مالی',
    },
    {
      id: 5,
      name: 'فناوری اطلاعات',
    },
    ],

    month: [{
      id: 1,
      name: 'فروردین',
    },
    {
      id: 2,
      name: 'اردیبهشت',
    },
    {
      id: 3,
      name: 'خرداد',
    },
    {
      id: 4,
      name: 'تیر',
    },
    {
      id: 5,
      name: 'مرداد',
    },
    {
      id: 6,
      name: 'شهریور',
    },
    {
      id: 7,
      name: 'مهر',
    },
    {
      id: 8,
      name: 'آبان',
    },
    {
      id: 9,
      name: 'آذر',
    },
    {
      id: 10,
      name: 'دی',
    },
    {
      id: 11,
      name: 'بهمن',
    },
    {
      id: 12,
      name: 'اسفند',
    }],

    employees: [{
      "id": 1,
      "code": 100,
      "fName": "رضا",
      "lName": "محمدی",
      "department": "تولید",
      "view": "eyeopen",
      "nationalCode": "09455211253",
      "certificateId": "22300",
      "fatherName": "علی",
      "born": "تهران",
      "birthdayDate": "1360/09/02",
      "gender": "زن",
      "maritalStatus": "متاهل",
      "childrenNumber": 2,
      "bloodType": "+AB",
      "hight": 192,
      "education": "تحصیلات تکمیلی",
      "militaryStatus": "خدمت کرده",
      "mobileNumber": "0912912912",
      "homeNumber": "021-55253369",
      "emergencyPhone": "0915915915",
      "address": "تهران -شهرک غرب",
      "insuranceCode": "0062356",
      "bankAccountNumber": "003711211254",
      "bankName": "سامان",
      "bankCardNumber": "5022-2017-5599-8523",
      "email": "reza.m@gmail.com",
      "password": "123456",
      "personalPhoto": "/assets/images/profile.png",
      "rollCallCode": "108",
      "borhanCode": "10008",
      "nationalCardImage": "/assets/images/national-code.png",
      "certificationImage": "/assets/images/certificate.jpg",
      // edit: "edit",
      // "month": moment(new Date()).locale('fa').format('MM'),
      // "date": moment(new Date()).locale('fa').format('YYYY/MM/DD'),
    }, {
      "id": 2,
      "code": 101,
      "fName": "رضا",
      "lName": "محمدی",
      "department": "تولید",
      "view": "eyeopen",
      "nationalCode": "09455211253",
      "certificateId": "22300",
      "fatherName": "علی",
      "born": "تهران",
      "birthdayDate": "1360/09/02",
      "gender": "زن",
      "maritalStatus": "متاهل",
      "childrenNumber": 2,
      "bloodType": "+AB",
      "hight": 192,
      "education": "تحصیلات تکمیلی",
      "militaryStatus": "خدمت کرده",
      "mobileNumber": "0912912912",
      "homeNumber": "021-55253369",
      "emergencyPhone": "0915915915",
      "address": "تهران -شهرک غرب",
      "insuranceCode": "0062356",
      "bankAccountNumber": "003711211254",
      "bankName": "سامان",
      "bankCardNumber": "5022-2017-5599-8523",
      "email": "reza.m@gmail.com",
      "password": "123456",
      "personalPhoto": "/assets/images/profile.png",
      "rollCallCode": "108",
      "borhanCode": "10008",
      "nationalCardImage": "/assets/images/national-code.png",
      "certificationImage": "/assets/images/certificate.jpg",
      // edit: "edit",
      // "month": moment(new Date()).locale('fa').format('MM'),
      // "date": moment(new Date()).locale('fa').format('YYYY/MM/DD'),
    }, {
      "id": 3,
      "code": 102,
      "fName": "رضا",
      "lName": "محمدی",
      "department": "تولید",
      "view": "eyeopen",
      "nationalCode": "09455211253",
      "certificateId": "22300",
      "fatherName": "علی",
      "born": "تهران",
      "birthdayDate": "1360/09/02",
      "gender": "زن",
      "maritalStatus": "متاهل",
      "childrenNumber": 2,
      "bloodType": "+AB",
      "hight": 192,
      "education": "تحصیلات تکمیلی",
      "militaryStatus": "خدمت کرده",
      "mobileNumber": "0912912912",
      "homeNumber": "021-55253369",
      "emergencyPhone": "0915915915",
      "address": "تهران -شهرک غرب",
      "insuranceCode": "0062356",
      "bankAccountNumber": "003711211254",
      "bankName": "سامان",
      "bankCardNumber": "5022-2017-5599-8523",
      "email": "reza.m@gmail.com",
      "password": "123456",
      "personalPhoto": "/assets/images/profile.png",
      "rollCallCode": "108",
      "borhanCode": "10008",
      "nationalCardImage": "/assets/images/national-code.png",
      "certificationImage": "/assets/images/certificate.jpg",
      // edit: "edit",
      // "month": moment(new Date()).locale('fa').format('MM'),
      // "date": moment(new Date()).locale('fa').format('YYYY/MM/DD'),
    },] as EmployeeModel[],

    employeeTimeSheet: [{
      "id": 1,
      "date": moment(new Date()).locale('fa').format('YYYY/MM/DD'),
      "shiftType": "شیفت صبح",
      "startTime": "07:30",
      "endTime": "15:30",
      "charged": 176,
      "timeSheet": "185:55",
      "delay": "10:05",
      "rush": "15:00",
      "overtime": "50:15",
      "lowtime": "02:00",
    }, {
      "id": 2,
      "date": moment(new Date()).locale('fa').format('YYYY/MM/DD'),
      "shiftType": "شیفت صبح",
      "startTime": "08:00",
      "endTime": "16:00",
      "charged": 176,
      "timeSheet": "170:30",
      "delay": "10:05",
      "rush": "15:00",
      "overtime": "50:15",
      "lowtime": "02:00",
    }, {
      "id": 3,
      "date": moment(new Date()).locale('fa').format('YYYY/MM/DD'),
      "shiftType": "شیفت عصر",
      "startTime": "07:30",
      "endTime": "15:55",
      "charged": 176,
      "timeSheet": "200:14",
      "delay": "10:05",
      "rush": "15:00",
      "overtime": "50:15",
      "lowtime": "02:00",
    },],

    customizeTimeSheetEmployeeColumns(columns: any) {
      columns[0].width = 0;

      columns[1].caption = "کد پرسنلی";
      columns[2].caption = "نام";
      columns[3].caption = "نام خانوادگی";
      columns[4].caption = "محل خدمت";
      columns[5].caption = "نمایش";

      columns[1].alignment = 'center';
      columns[2].alignment = 'center';
      columns[3].alignment = 'center';
      columns[4].alignment = 'center';
      columns[5].alignment = 'center';

      columns[5].width = '80px';
      columns[5].allowFiltering = false;

      // columns[6].cssClass = "text-success";
    },

    customizeTimeSheetDetailsColumns(columns: any) {
      columns[0].width = 0;

      columns[1].caption = "تاریخ";
      columns[2].caption = "نوع شیفت";
      columns[3].caption = "ساعت ورود";
      columns[4].caption = "ساعت خروج";
      columns[5].caption = "موظفی";
      columns[6].caption = "کارکرد";
      columns[7].caption = "تاخیر";
      columns[8].caption = "تعجیل";
      columns[9].caption = "اضافه کار";
      columns[10].caption = "کسرکار";

      columns[1].alignment = 'center';
      columns[2].alignment = 'center';
      columns[3].alignment = 'center';
      columns[4].alignment = 'center';
      columns[5].alignment = 'center';
      columns[6].alignment = 'center';
      columns[7].alignment = 'center';
      columns[8].alignment = 'center';
      columns[9].alignment = 'center';
      columns[10].alignment = 'center';
    },
  }

  constructor() {
    this.onViewTimeSheet = this.onViewTimeSheet.bind(this);
  }

  ngOnInit(): void {}

  onViewTimeSheet(e: any) {
    this.pageData.selectedEmployee = e.row.data;
    console.log("selectedEmployee", this.pageData.selectedEmployee);
    this.pageData.showTimeSheetDetails = true;
    e.event.preventDefault();
  }

  departmentChange() {
    console.log("selectedDepartment", this.pageData.selectedDepartment);
  }

  monthChange() {
    switch (this.pageData.selectedMonth) {
      case 1:
        this.pageData.selectedFromDate = moment.from('1402/01/01', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
        this.pageData.selectedToDate = moment.from('1402/01/31', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
        break;

      case 2:
        this.pageData.selectedFromDate = moment.from('1402/02/01', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
        this.pageData.selectedToDate = moment.from('1402/02/31', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
        break;

      case 3:
        this.pageData.selectedFromDate = moment.from('1402/03/01', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
        this.pageData.selectedToDate = moment.from('1402/03/31', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
        break;

      case 4:
        this.pageData.selectedFromDate = moment.from('1402/04/01', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
        this.pageData.selectedToDate = moment.from('1402/04/31', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
        break;

      case 5:
        this.pageData.selectedFromDate = moment.from('1402/05/01', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
        this.pageData.selectedToDate = moment.from('1402/05/31', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
        break;

      case 6:
        this.pageData.selectedFromDate = moment.from('1402/06/01', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
        this.pageData.selectedToDate = moment.from('1402/06/31', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
        break;

      case 7:
        this.pageData.selectedFromDate = moment.from('1402/07/01', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
        this.pageData.selectedToDate = moment.from('1402/07/30', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
        break;

      case 8:
        this.pageData.selectedFromDate = moment.from('1402/08/01', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
        this.pageData.selectedToDate = moment.from('1402/08/30', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
        break;

      case 9:
        this.pageData.selectedFromDate = moment.from('1402/09/01', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
        this.pageData.selectedToDate = moment.from('1402/09/30', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
        break;

      case 10:
        this.pageData.selectedFromDate = moment.from('1402/10/01', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
        this.pageData.selectedToDate = moment.from('1402/10/30', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
        break;

      case 11:
        this.pageData.selectedFromDate = moment.from('1402/11/01', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
        this.pageData.selectedToDate = moment.from('1402/11/30', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
        break;

      case 12:
        this.pageData.selectedFromDate = moment.from('1402/12/01', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
        this.pageData.selectedToDate = moment.from('1402/12/29', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
        break;
    }
  }

  fromDateChange() {
    console.log("selectedFromDate", this.pageData.selectedFromDate);
  }
}