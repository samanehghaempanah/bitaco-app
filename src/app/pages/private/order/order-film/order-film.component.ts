import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-order-film',
  templateUrl: './order-film.component.html',
  styleUrls: ['./order-film.component.scss']
})
export class OrderFilmComponent implements OnInit {

  pageData = {
    formType: 'list',
    gridBoxValue: [] as number[],
    NewDocFormVisible: false,
    EditDocFormVisible: false,
    ViewDocFormVisible: false,
    NewDocFormButtonOptions: {},
    EditDocFormButtonOptions: {},
    popupVisible: false,

    delivery: [
      { id: 1, text: "EXW" },
      { id: 1, text: "CFR" },
      { id: 1, text: "FOB" },
      { id: 1, text: "CPT" },
      { id: 1, text: "FCA" }
    ],

    deliveryConditions: [
      { id: 1, text: "در مرحله اول 25 روز کاری پس از قطعیت سفارش و تایید نهایی" },
      { id: 2, text: "10 روز کاری پس از قطعیت سفارش و واریز پیش پرداخت" },
      { id: 3, text: "15 روز کاری پس از قطعیت سفارش، تایید نهایی طرح و واریز وجه کلیشه/سیلندر" },
      { id: 4, text: "20 روز کاری" },
      { id: 5, text: "15 روز کاری" },
      { id: 6, text: "10 روز کاری" }],

    peymentConditions: [
      { id: 1, text: "100% نقدی" },
      { id: 1, text: "100% 30 روزه" },
      { id: 1, text: "100% 45 روزه" },
      { id: 1, text: "100% دو ماهه" },
      { id: 1, text: "100% سه ماهه" },
      { id: 1, text: "30% نقد الباقی یک ماهه" },
      { id: 1, text: "در توضیحات" }],

    orders: [{
      id: 1,
      row: 1,
      MATCode: 1000,
      productName: "محصول 1",
      material: "مواد اولیه 1",
      filmProduction: "تولید فیلم 1",
      amount: 10,
      unit: "کیلوگرم",
      price: 200.000,
      currency: "ریال",
      exchangeRate: 10,
      description: "توضیحات 1"
    },
    {
      id: 2,
      row: 2,
      MATCode: 1001,
      productName: "محصول 2",
      material: "مواد اولیه 2",
      filmProduction: "تولید فیلم 2",
      amount: 10,
      unit: "کیلوگرم",
      price: 200.000,
      currency: "ریال",
      exchangeRate: 10,
      description: "توضیحات 2"
    },
    {
      id: 3,
      row: 3,
      MATCode: 1002,
      productName: "محصول 3",
      material: "مواد اولیه 3",
      filmProduction: "تولید فیلم 3",
      amount: 10,
      unit: "کیلوگرم",
      price: 200.000,
      currency: "ریال",
      exchangeRate: 10,
      description: "توضیحات 3"
    },],
  };

  docFileExtention: any = [
    'doc',
    'xls',
    'txt',
    'pdf',
    'ppt',
    'png',
    'jpg',
    'jpeg',
    'psd'];

  newDocFilesUploaded(e: any) {
    console.log("newDocFilesUploaded event:", e);
    console.log("newDocFilesUploaded event.value:", e.value);
    this.newDocFormData.fileData = e.value;
    this.newDocFormData.path = '/assets/files/' + this.newDocFormData.fileData[0].name;
  }

  editDocFilesUploaded(e: any) {
    console.log("editDocFilesUploaded event:", e);
    console.log("editDocFilesUploaded event.value:", e.value);
    this.editDocFormData.fileData = e.value;
    this.editDocFormData.path = '/assets/files/' + this.editDocFormData.fileData[0].name;
  }

  docFileModel: any = [{
    id: 1,
    text: 'فایل اولیه مشتری',
  },
  {
    id: 2,
    text: 'نقشه کلدسیل',
  },
  {
    id: 3,
    text: 'نقشه پاکت سازی',
  },
  {
    id: 4,
    text: 'نقشه پانچ',
  },
  {
    id: 5,
    text: 'فایل درخواست های مشتری',
  },
  {
    id: 6,
    text: 'فرم تاییدیه محصول جهت مشتری',
  },
  {
    id: 7,
    text: 'فرم تاییدیه کلدسیل جهت مشتری',
  },
  {
    id: 8,
    text: 'فرم تاییدیه پاکت سازی جهت مشتری',
  },
  {
    id: 9,
    text: 'فرم تاییدیه چیدمان جهت مشتری',
  },
  {
    id: 10,
    text: 'فرم تایید شده مشتری برای محصول',
  },
  {
    id: 11,
    text: '...',
  }];

  tabs = [{
    id: 1,
    text: 'اطلاعات اولیه',
    content: 'tab1',
  },
  {
    id: 2,
    text: 'مستندات',
    content: 'tab2',
  }];

  tabContent: string;

  documents: any = [{
    id: 1,
    type: "فایل اولیه مشتری",
    name: "سیلندر.pdf",
    // path: "/assets/files/1.png",
    description: "برای تست است",
    suffix: "pdf",
    date: moment(new Date()).locale('fa').format('YYYY/MM/DD'),
    edit: "edit",
    delete: "trash",
    view: "eyeopen",
    download: "download"
  },
  {
    id: 2,
    type: "فایل اولیه مشتری",
    name: "سیلندر.pdf",
    // path: "/assets/files/1.png",
    description: "برای تست است",
    suffix: "pdf",
    date: moment(new Date()).locale('fa').format('YYYY/MM/DD'),
    edit: "edit",
    delete: "trash",
    view: "eyeopen",
    download: "download"
  },
  {
    id: 3,
    type: "فایل اولیه مشتری",
    name: "سیلندر.pdf",
    // path: "/assets/files/1.png",
    description: "برای تست است",
    suffix: "pdf",
    date: moment(new Date()).locale('fa').format('YYYY/MM/DD'),
    edit: "edit",
    delete: "trash",
    view: "eyeopen",
    download: "download"
  }];

  orderData = {
    packageType: 0,
  };

  fileExtention: any = [
    'png',
    'jpg',
    'psd'];

  unit: any = [{
    id: 1,
    name: 'گرم',
  }, {
    id: 2,
    name: 'کیلوگرم',
  },
  {
    id: 3,
    name: 'متر',
  },
  {
    id: 4,
    name: 'لیتر',
  }];

  address: any = [{
    id: 1,
    name: 'محل 1',
  }, {
    id: 2,
    name: 'محل 2',
  },
  {
    id: 3,
    name: 'محل 3',
  },
  {
    id: 4,
    name: 'محل 4',
  }];

  customizeDocumentColumns(columns: any) {
    columns[0].width = 0;

    columns[1].caption = "نوع فایل";
    columns[2].caption = "نام فایل";
    // columns[3].caption = "مسیر فایل";
    columns[3].caption = "توضیحات";
    columns[4].caption = "پسوند";
    columns[5].caption = "تاریخ";
    columns[6].caption = "ویرایش";
    columns[7].caption = "حذف";
    columns[8].caption = "نمایش";
    columns[9].caption = "دانلود";

    columns[1].alignment = 'center';
    columns[2].alignment = 'center';
    columns[3].alignment = 'center';
    columns[4].alignment = 'center';
    columns[5].alignment = 'center';
    columns[6].alignment = 'center';
    columns[7].alignment = 'center';
    columns[8].alignment = 'center';
    columns[9].alignment = 'center';

    // columns[11].alignment = 'center';
    columns[6].width = '80px';
    columns[7].width = '80px';
    columns[8].width = '80px';
    columns[9].width = '80px';
  };

  customizeOrdersColumns(columns: any) {
    columns[0].width = 0;

    columns[1].caption = "ردیف";
    columns[2].caption = "MATCode";
    columns[3].caption = "نام محصول";
    columns[4].caption = "مواد اولیه";
    columns[5].caption = "تولید فیلم";
    columns[6].caption = "مقدار";
    columns[7].caption = "واحد";
    columns[8].caption = "قیمت";
    columns[9].caption = "ارز";
    columns[10].caption = "نرخ برابری";
    columns[11].caption = "توضیحات";

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
    columns[11].alignment = 'center';
  };

  newDocFormData = {
    type: '',
    description: '',
    path: '',
    fileData: [] as any,
  };

  editDocFormData = {
    id: 0,
    type: '',
    description: '',
    path: '',
    fileData: {} as any,
  };

  viewDocFile = '';

  // My Orders
  dataSource: any;
  date: Date = new Date();

  // New Order
  order: any;
  colCountByScreen: object;
  isGridBoxOpened = false;
  gridBoxValue: number[] = [];
  gridBoxDocumentValue: number[] = [];

  constructor(private route: ActivatedRoute) {
    this.tabContent = this.tabs[0].content;

    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };

    this.order = {
      FirstName: '',
      LastName: '',
      BirthDate: new Date(),
    };

    this.pageData.NewDocFormButtonOptions = {
      width: 300,
      text: 'افزودن',
      type: 'default',
      stylingMode: 'contained',
      onClick: () => {
        this.pageData.popupVisible = false;
        this.pageData.NewDocFormVisible = false;
        let lastId = this.documents.at(-1)?.id;
        let newId;
        lastId ? newId = lastId + 1 : -1;
        if (newId) {
          this.documents.push({
            id: newId,
            type: this.newDocFormData.type,
            name: this.newDocFormData.fileData[0]?.name,
            path: '/assets/files/' + this.newDocFormData.fileData[0].name,
            description: this.newDocFormData.description,
            suffix: this.newDocFormData.fileData[0]?.type.split("/", 2)[1],
            date: moment(new Date()).locale('fa').format('YYYY/MM/DD'),
            edit: 'edit',
            delete: 'trash',
            view: 'eyeopen',
            download: 'download'
          });
        }

        this.newDocFormData.type = '';
        this.newDocFormData.description = '';
        this.newDocFormData.path = '';
        this.newDocFormData.fileData = [];
      },
    };

    this.pageData.EditDocFormButtonOptions = {
      width: 300,
      text: 'ویرایش',
      type: 'default',
      stylingMode: 'contained',
      onClick: () => {
        this.pageData.popupVisible = false;
        this.pageData.EditDocFormVisible = false;
        let indexToEdit = this.documents.findIndex((item: any) => item.id === this.editDocFormData.id);

        this.documents[indexToEdit].type = this.editDocFormData.type;
        this.documents[indexToEdit].name = this.editDocFormData.fileData[0].name;
        // this.documents[indexToEdit].path = '/assets/files/' + this.editDocFormData.fileData[0].name;
        this.documents[indexToEdit].description = this.editDocFormData.description;
        this.documents[indexToEdit].suffix = this.editDocFormData.fileData[0].type.split("/", 2)[1];
        // this.documents = Object.assign([], this.documents);
      },
    };

  }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.pageData.formType = data['formType']);
  }

  onSubmitOrder() {
    console.log("order form submited", this.orderData);
  }

  selectTab(e: any) {
    this.tabContent = this.tabs[e.itemIndex].content;
  }

  onEditDocFile(item: any) {
    this.editDocFormData = item;
    console.log("editDocFormData:", this.editDocFormData);
    this.pageData.EditDocFormVisible = true;
  }

  onDeleteDocFile(item: any) {
    this.documents = this.documents.filter((doc: any) => doc.id != item.id);
  }

  onViewDocFile(item: any) {
    this.viewDocFile = item.path;
    console.log("viewDocFile:", this.viewDocFile);
    this.pageData.ViewDocFormVisible = true;
  }

  showNewDocForm(e: any) {
    console.log("showNewDocForm event:", e);
    this.pageData.NewDocFormVisible = true;
  }
}
