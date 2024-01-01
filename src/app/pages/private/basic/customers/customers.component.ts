import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  pageData = {
    formType: 'customers',
    popupVisible: false,
    ViewFormVisible: false,
    gridBoxValue: [] as number[],

    tabs: [{
      id: 1,
      text: 'اطلاعات اولیه',
      content: 'tab1',
    },
    {
      id: 2,
      text: 'اطلاعات تماس',
      content: 'tab2',
    },
    {
      id: 3,
      text: 'اطلاعات حساب',
      content: 'tab3',
    }],

    tabContent: '',

    customers: [{
      id: 1,
      name: 'شرکت 1',
      model: 'مشتریان',
      code: 100,
      province: 'خراسان رضوی',
      city: 'مشهد',
      view: 'eyeopen',
      type: 'حقیقی',
      secondName: 'نام دوم شرکت 1',
      agentName: 'میلاد مشرقی',
      nationalId: '10001000',
      economicCode: '123456789',
      registrationNumber: '112233',
      phoneNumber: '0513654321',
      faxNumber: '0513654321',
      mobileNumber: '0915915915',
      postalCode: '098989898',
      activityField: 'تولیدی',
      country: 'ایران',
      address: 'شهرک صنعتی',
      email: 'company@gmail.com',
      responsible: 'علی محمدی',
      accountingId: '123',
      bankName: 'ملت',
      bankAccountNumber: '371002536',
      bankShebaNumber: 'IR-102202545741123',
      bankCardNumber: '5022-2910-2017-1515',
    },
    {
      id: 2,
      name: 'شرکت 2',
      model: 'مشتریان',
      code: 101,
      province: 'خراسان رضوی',
      city: 'مشهد',
      view: 'eyeopen',
      type: 'حقیقی',
      secondName: 'نام دوم شرکت 2',
      agentName: 'میلاد مشرقی',
      nationalId: '10001000',
      economicCode: '123456789',
      registrationNumber: '112233',
      phoneNumber: '0513654321',
      faxNumber: '0513654321',
      mobileNumber: '0915915915',
      postalCode: '098989898',
      activityField: 'تولیدی',
      country: 'ایران',
      address: 'شهرک صنعتی',
      email: 'company@gmail.com',
      responsible: 'علی محمدی',
      accountingId: '123',
      bankName: 'ملت',
      bankAccountNumber: '371002536',
      bankShebaNumber: 'IR-102202545741123',
      bankCardNumber: '5022-2910-2017-1515',
    },
    {
      id: 3,
      name: 'شرکت 3',
      model: 'مشتریان',
      code: 102,
      province: 'خراسان رضوی',
      city: 'مشهد',
      view: 'eyeopen',
      type: 'حقیقی',
      secondName: 'نام دوم شرکت 3',
      agentName: 'میلاد مشرقی',
      nationalId: '10001000',
      economicCode: '123456789',
      registrationNumber: '112233',
      phoneNumber: '0513654321',
      faxNumber: '0513654321',
      mobileNumber: '0915915915',
      postalCode: '098989898',
      activityField: 'تولیدی',
      country: 'ایران',
      address: 'شهرک صنعتی',
      email: 'company@gmail.com',
      responsible: 'علی محمدی',
      accountingId: '123',
      bankName: 'ملت',
      bankAccountNumber: '371002536',
      bankShebaNumber: 'IR-102202545741123',
      bankCardNumber: '5022-2910-2017-1515',
    }],

    customizeColumns(columns: any) {
      columns[0].width = 0;
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

      columns[1].caption = "نام مشتری";
      columns[2].caption = "مدل مشتری";
      columns[3].caption = "شناسه مشتری";
      columns[4].caption = "استان";
      columns[5].caption = "شهر";
      columns[6].caption = "نمایش";

      columns[1].alignment = 'center';
      columns[2].alignment = 'center';
      columns[3].alignment = 'center';
      columns[4].alignment = 'center';
      columns[5].alignment = 'center';
      columns[6].alignment = 'center';

      columns[6].width = 100;
      columns[6].allowFiltering = false;
    },

    viewFormData: {
      id: 0,
      name: '',
      type: '',
      model: '',
      code: 0,
      secondName: '',
      agentName: '',
      nationalId: '',
      economicCode: '',
      registrationNumber: '',
      phoneNumber: '',
      faxNumber: '',
      mobileNumber: '',
      postalCode: '',
      activityField: '',
      country: '',
      province: '',
      city: '',
      address: '',
      email: '',
      responsible: '',
      accountingId: '',
      bankName: '',
      bankAccountNumber: '',
      bankShebaNumber: '',
      bankCardNumber: '',
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
    //     let lastId = this.pageData.customers.at(-1)?.id;
    //     let newId;
    //     lastId ? newId = lastId + 1 : -1;
    //     if (newId) {
    //       this.pageData.customers.push({
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
    //     let indexToEdit = this.pageData.customers.findIndex((item: any) => item.id === this.pageData.editFormData.id);

    //     this.pageData.customers[indexToEdit].name = this.pageData.editFormData.name;
    //     this.pageData.customers[indexToEdit].type = this.pageData.editFormData.type;
    //     this.pageData.customers[indexToEdit].description = this.pageData.editFormData.description;
    //     this.pageData.customers[indexToEdit].date = this.pageData.editFormData.date;
    //     // this.documents = Object.assign([], this.documents);
    //   },
    // };
  }

  ngOnInit(): void {
  }

  selectTab(e: any) {
    this.pageData.tabContent = this.pageData.tabs[e.itemIndex].content;
  }

  onViewCustomer(item: any) {
    this.pageData.viewFormData = item;
    console.log("viewFormData:", this.pageData.viewFormData);
    this.pageData.ViewFormVisible = true;
  }

  // showNewDocForm(e: any) {
  //   console.log("showNewDocForm event:", e);
  //   this.pageData.NewFormVisible = true;
  // }

  // onEditCustomer(item: any) {
  //   this.pageData.editFormData = item;
  //   console.log("editFormData:", this.pageData.editFormData);
  //   this.pageData.EditFormVisible = true;
  // }

}
