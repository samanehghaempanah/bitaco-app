import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  pageData = {
    employeeViewFormVisible: false,
    gridListBoxValue: [] as number[],
    selectedDepartment: '' as string,
    selectedMonth: null as any,
    selectedFromDate: null as any,
    selectedToDate: null as any,
    // NewFormVisible: false,
    // EditFormVisible: false,
    // NewFormButtonOptions: {},
    // EditDocFormButtonOptions: {},

    tabs: [{
      id: 1,
      text: 'اطلاعات اولیه',
      content: 'tab1',
    },
    {
      id: 1,
      text: 'اطلاعات تکمیلی',
      content: 'tab2',
    },
    {
      id: 2,
      text: 'اطلاعات تماس',
      content: 'tab3',
    },
    {
      id: 3,
      text: 'اطلاعات حساب',
      content: 'tab4',
    }],

    tabContent: '',

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
    },],

    customizeEmployeeColumns(columns: any) {
      columns[0].width = 0;
      columns[6].width = 0;
      columns[7].width = 0;
      columns[8].width = 0;
      columns[9].width = 0;
      columns[10].width = 0;
      columns[11].width = 0;
      columns[12].width = 0;
      columns[13].width = 0;
      columns[14].width = 0;
      columns[15].width = 0;
      columns[16].width = 0;
      columns[17].width = 0;
      columns[18].width = 0;
      columns[19].width = 0;
      columns[20].width = 0;
      columns[21].width = 0;
      columns[22].width = 0;
      columns[23].width = 0;
      columns[24].width = 0;
      columns[25].width = 0;
      columns[26].width = 0;
      columns[27].width = 0;
      columns[28].width = 0;
      columns[29].width = 0;
      columns[30].width = 0;
      columns[31].width = 0;
      columns[32].width = 0;

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

    viewFormData: {
      id: 2,
      code: 101,
      fName: '',
      lName: '',
      department: '',
      nationalCode: '',
      certificateId: '',
      fatherName: '',
      born: '',
      birthdayDate: '',
      gender: '',
      maritalStatus: '',
      childrenNumber: 0,
      bloodType: '',
      hight: 0,
      education: '',
      militaryStatus: '',
      mobileNumber: '',
      homeNumber: '',
      emergencyPhone: '',
      address: '',
      insuranceCode: '',
      bankAccountNumber: '',
      bankName: '',
      bankCardNumber: '',
      email: '',
      password: '',
      personalPhoto: '',
      rollCallCode: '',
      borhanCode: '',
      nationalCardImage: '',
      certificationImage: '',
    },

    // newFormData: {
    //   id: 0,
    //   name: '',
    //   type: '',
    //   description: '',
    //   date: '' as any,
    // },

    // editFormData: {
    //   id: 0,
    //   name: '',
    //   type: '',
    //   description: '',
    //   date: '' as any,
    // },
  }

  constructor() {
    this.pageData.tabContent = this.pageData.tabs[0].content;
    // this.pageData.NewFormButtonOptions = {
    //   width: 300,
    //   text: 'افزودن',
    //   type: 'default',
    //   stylingMode: 'contained',
    //   onClick: () => {
    //     this.pageData.popupVisible = false;
    //     this.pageData.NewFormVisible = false;
    //     let lastId = this.pageData.persons.at(-1)?.id;
    //     let newId;
    //     lastId ? newId = lastId + 1 : -1;
    //     if (newId) {
    //       this.pageData.persons.push({
    //         id: newId,
    //         name: this.pageData.newFormData.name,
    //         type: this.pageData.newFormData.type,
    //         description: this.pageData.newFormData.description,
    //         date: moment(new Date()).locale('fa').format('YYYY/MM/DD'),
    //         edit: 'edit',
    //         view: 'eyeopen'
    //       });
    //     }
    //   },
    // };

    // this.pageData.EditDocFormButtonOptions = {
    //   width: 300,
    //   text: 'ویرایش',
    //   type: 'default',
    //   stylingMode: 'contained',
    //   onClick: () => {
    //     this.pageData.popupVisible = false;
    //     this.pageData.EditFormVisible = false;
    //     let indexToEdit = this.pageData.persons.findIndex((item: any) => item.id === this.pageData.editFormData.id);

    //     this.pageData.persons[indexToEdit].name = this.pageData.editFormData.name;
    //     this.pageData.persons[indexToEdit].type = this.pageData.editFormData.type;
    //     this.pageData.persons[indexToEdit].description = this.pageData.editFormData.description;
    //     this.pageData.persons[indexToEdit].date = this.pageData.editFormData.date;
    //     // this.documents = Object.assign([], this.documents);
    //   },
    // };
  }

  ngOnInit(): void {
  }

  selectTab(e: any) {
    this.pageData.tabContent = this.pageData.tabs[e.itemIndex].content;
  }

  onViewEmployee(item: any) {
    console.log("viewFormData:", this.pageData.viewFormData);
    this.pageData.viewFormData = item;
    this.pageData.employeeViewFormVisible = true;
  }

  // showNewDocForm(e: any) {
  //   console.log("showNewDocForm event:", e);
  //   this.pageData.NewFormVisible = true;
  // }

  // onEditEmployee(item: any) {
  //   this.pageData.editFormData = item;
  //   console.log("editFormData:", this.pageData.editFormData);
  //   this.pageData.EditFormVisible = true;
  // }
}
