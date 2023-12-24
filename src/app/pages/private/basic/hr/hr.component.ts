import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.scss']
})
export class HrComponent implements OnInit {

  pageData = {
    formType: 'customers',
    // NewFormVisible: false,
    // EditFormVisible: false,
    ViewFormVisible: false,
    popupVisible: false,
    gridBoxValue: [] as number[],
    // NewFormButtonOptions: {},
    // EditDocFormButtonOptions: {},
    selectedMonth: null as any,
    selectedFromDate: null as any,
    selectedToDate: null as any,

    tabs: [{
      id: 1,
      text: 'اشخاص',
      content: 'tab1',
    },
    {
      id: 2,
      text: 'پرسنل',
      content: 'tab2',
    }],

    tabContent: '',

    persons: [{
      id: 1,
      name: "شرکت چاکلز",
      type: "نوع 1",
      description: "برای تست است",
      date: moment(new Date()).locale('fa').format('YYYY/MM/DD'),
      // edit: "edit",
      view: "eyeopen",
    }, {
      id: 2,
      name: "شرکت ردبول",
      type: "نوع 1",
      description: "برای تست است",
      date: moment(new Date()).locale('fa').format('YYYY/MM/DD'),
      // edit: "edit",
      view: "eyeopen",
    }, {
      id: 3,
      name: "شرکت نستله",
      type: "نوع 1",
      description: "برای تست است",
      date: moment(new Date()).locale('fa').format('YYYY/MM/DD'),
      // edit: "edit",
      view: "eyeopen",
    },],

    employees: [{
      id: 1,
      code: 100,
      fullName: "رضا محمدی",
      month: moment(new Date()).locale('fa').format('MM'),
      department: 'اداری',
      date: moment(new Date()).locale('fa').format('YYYY/MM/DD'),
      // edit: "edit",
      view: "eyeopen",
    }, {
      id: 2,
      code: 101,
      fullName: "امیر سالاری",
      month: moment(new Date()).locale('fa').format('MM'),
      department: 'اداری',
      date: moment(new Date()).locale('fa').format('YYYY/MM/DD'),
      // edit: "edit",
      view: "eyeopen",
    }, {
      id: 3,
      code: 102,
      fullName: "ساناز نژادی",
      month: moment(new Date()).locale('fa').format('MM'),
      department: 'اداری',
      date: moment(new Date()).locale('fa').format('YYYY/MM/DD'),
      // edit: "edit",
      view: "eyeopen",
    },],

    customizePersonColumns(columns: any) {
      columns[0].width = 0;
      columns[1].caption = "نام مشتری";
      columns[2].caption = "نوع مشتری";
      columns[3].caption = "توضیحات";
      columns[4].caption = "تاریخ ثبت نام";
      // columns[5].caption = "ویرایش";
      columns[5].caption = "نمایش";

      columns[1].alignment = 'center';
      columns[2].alignment = 'center';
      columns[3].alignment = 'center';
      columns[4].alignment = 'center';
      // columns[5].alignment = 'center';
      columns[5].alignment = 'center';

      // columns[5].width = '80px';
      columns[5].width = '80px';
    },

    customizeEmployeeColumns(columns: any) {
      columns[0].width = 0;
      columns[1].caption = "کد پرسنلی";
      columns[2].caption = "نام و نام خانوادگی";
      columns[3].caption = "کارکرد";
      columns[4].caption = "محل خدمت";
      columns[5].caption = "تاریخ";
      columns[6].caption = "نمایش";

      columns[1].alignment = 'center';
      columns[2].alignment = 'center';
      columns[3].alignment = 'center';
      columns[4].alignment = 'center';
      columns[5].alignment = 'center';
      columns[6].alignment = 'center';

      // columns[5].width = '80px';
      columns[6].width = '80px';
    },

    customerType: [{
      id: 1,
      text: 'نوع 1',
    }, {
      id: 2,
      text: 'نوع 2',
    },],

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

    viewFormData: {
      id: 0,
      name: '',
      type: '',
      description: '',
      date: '' as any,
    },
  }

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => this.pageData.formType = data['formType']);
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

  // showNewDocForm(e: any) {
  //   console.log("showNewDocForm event:", e);
  //   this.pageData.NewFormVisible = true;
  // }

  // onEditPerson(item: any) {
  //   this.pageData.editFormData = item;
  //   console.log("editFormData:", this.pageData.editFormData);
  //   this.pageData.EditFormVisible = true;
  // }

  onViewPerson(item: any) {
    this.pageData.viewFormData = item;
    console.log("viewFormData:", this.pageData.viewFormData);
    this.pageData.ViewFormVisible = true;
  }

  monthChange() {
    switch (this.pageData.selectedMonth) {
      case 1 : 
      this.pageData.selectedFromDate = moment.from('1402/01/01', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
      this.pageData.selectedToDate = moment.from('1402/01/31', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
      break;

      case 2 : 
      this.pageData.selectedFromDate = moment.from('1402/02/01', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
      this.pageData.selectedToDate = moment.from('1402/02/31', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
      break;

      case 3 : 
      this.pageData.selectedFromDate = moment.from('1402/03/01', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
      this.pageData.selectedToDate = moment.from('1402/03/31', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
      break;

      case 4 : 
      this.pageData.selectedFromDate = moment.from('1402/04/01', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
      this.pageData.selectedToDate = moment.from('1402/04/31', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
      break;

      case 5 : 
      this.pageData.selectedFromDate = moment.from('1402/05/01', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
      this.pageData.selectedToDate = moment.from('1402/05/31', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
      break;

      case 6 : 
      this.pageData.selectedFromDate = moment.from('1402/06/01', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
      this.pageData.selectedToDate = moment.from('1402/06/31', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
      break;

      case 7 : 
      this.pageData.selectedFromDate = moment.from('1402/07/01', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
      this.pageData.selectedToDate = moment.from('1402/07/30', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
      break;

      case 8 : 
      this.pageData.selectedFromDate = moment.from('1402/08/01', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
      this.pageData.selectedToDate = moment.from('1402/08/30', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
      break;

      case 9 : 
      this.pageData.selectedFromDate = moment.from('1402/09/01', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
      this.pageData.selectedToDate = moment.from('1402/09/30', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
      break;

      case 10 : 
      this.pageData.selectedFromDate = moment.from('1402/10/01', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
      this.pageData.selectedToDate = moment.from('1402/10/30', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
      break;

      case 11 : 
      this.pageData.selectedFromDate = moment.from('1402/11/01', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
      this.pageData.selectedToDate = moment.from('1402/11/30', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
      break;

      case 12 : 
      this.pageData.selectedFromDate = moment.from('1402/12/01', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
      this.pageData.selectedToDate = moment.from('1402/12/29', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
      break;
    }
  }

  fromDateChange() {
    console.log("selectedFromDate", this.pageData.selectedFromDate);
    
  }

}
