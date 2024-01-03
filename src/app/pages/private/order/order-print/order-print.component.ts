import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-order-print',
  templateUrl: './order-print.component.html',
  styleUrls: ['./order-print.component.scss']
})
export class OrderPrintComponent implements OnInit {

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
      productId: 1000,
      productName: "محصول 1",
      helioPrint: false,
      felexoPrint : false,
      laminate: true,
      cutting: true,
      coldCeil: false,
      packeting: true,
      centerCeil: false,
      makingCylinder: true,
      punch: true,
      cut: false,
      rollToRoll: false,
      threatment: true,
      couting: false,
      amount: 10,
      unit: "کیلوگرم",
      price: 200.000,
      currency: "ریال",
      exchangeRate: 10,
      design: "طرح 1",
      cylinder: "سیلندر 1",
      layer1: "L1",
      layer2: "L2",
      layer3: "L3",
      layer4: "L4",
      description: "1 توضیحات"
    },
    {
      id: 2,
      row: 2,
      productId: 1001,
      productName: "محصول 2",
      helioPrint: true,
      felexoPrint : false,
      laminate: false,
      cutting: true,
      coldCeil: false,
      packeting: true,
      centerCeil: true,
      makingCylinder: true,
      punch: false,
      cut: false,
      rollToRoll: false,
      threatment: true,
      couting: true,
      amount: 10,
      unit: "کیلوگرم",
      price: 200.000,
      currency: "ریال",
      exchangeRate: 10,
      design: "طرح 2",
      cylinder: "سیلندر 2",
      layer1: "L1",
      layer2: "L2",
      layer3: "L3",
      layer4: "L4",
      description: "2 توضیحات"
    },
    {
      id: 3,
      row: 3,
      productId: 1002,
      productName: "محصول 3",
      helioPrint: true,
      felexoPrint : true,
      laminate: false,
      cutting: false,
      coldCeil: false,
      packeting: true,
      centerCeil: false,
      makingCylinder: true,
      punch: true,
      cut: false,
      rollToRoll: true,
      threatment: false,
      couting: true,
      amount: 10,
      unit: "کیلوگرم",
      price: 200.000,
      currency: "ریال",
      exchangeRate: 10,
      design: "طرح 3",
      cylinder: "سیلندر 3",
      layer1: "L1",
      layer2: "L2",
      layer3: "L3",
      layer4: "L4",
      description: "3 توضیحات"
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
    columns[1].width = "auto";
    columns[2].width = "auto";
    columns[3].width = "auto";
    columns[4].width = "auto";
    columns[5].width = "auto";
    columns[6].width = "auto";
    columns[7].width = "auto";
    columns[8].width = "auto";
    columns[9].width = "auto";
    columns[10].width = "auto";
    columns[11].width = "auto";
    columns[12].width = "auto";
    columns[13].width = "auto";
    columns[14].width = "auto";
    columns[15].width = "auto";
    columns[16].width = "auto";
    columns[17].width = "auto";
    columns[18].width = "auto";
    columns[19].width = "auto";
    columns[20].width = "auto";
    columns[21].width = "auto";
    columns[22].width = "auto";
    columns[23].width = "auto";
    columns[24].width = "auto";
    columns[25].width = "auto";
    columns[26].width = "auto";
    columns[27].width = "auto";
    columns[28].width = "auto";

    columns[1].caption = "ردیف";
    columns[2].caption = "شناسه محصول";
    columns[3].caption = "نام محصول";
    columns[4].caption = "چاپ هلیو";
    columns[5].caption = "چاپ فلکسو";
    columns[6].caption = "لمینت";
    columns[7].caption = "برش";
    columns[8].caption = "کلدسیل";
    columns[9].caption = "پاکت سازی";
    columns[10].caption = "سنترسیل";
    columns[11].caption = "سیلندرسازی";
    columns[12].caption = "پانچ";
    columns[13].caption = "کات";
    columns[14].caption = "رول به رول";
    columns[15].caption = "تریتمنت";
    columns[16].caption = "کوتینگ";
    columns[17].caption = "مقدار";
    columns[18].caption = "واحد";
    columns[19].caption = "قیمت";
    columns[20].caption = "ارز";
    columns[21].caption = "نرخ برابری";
    columns[22].caption = "طراحی";
    columns[23].caption = "سیلندر";
    columns[24].caption = "لایه 1";
    columns[25].caption = "لایه 2";
    columns[26].caption = "لایه 3";
    columns[27].caption = "لایه 4";
    columns[28].caption = "توضیحات";

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
    columns[12].alignment = 'center';
    columns[13].alignment = 'center';
    columns[14].alignment = 'center';
    columns[15].alignment = 'center';
    columns[16].alignment = 'center';
    columns[17].alignment = 'center';
    columns[18].alignment = 'center';
    columns[19].alignment = 'center';
    columns[20].alignment = 'center';
    columns[21].alignment = 'center';
    columns[22].alignment = 'center';
    columns[23].alignment = 'center';
    columns[24].alignment = 'center';
    columns[25].alignment = 'center';
    columns[26].alignment = 'center';
    columns[27].alignment = 'center';
    columns[28].alignment = 'center';

    columns[1].cssClass = 'text-vertical';
    columns[2].cssClass = 'text-vertical';
    columns[3].cssClass = 'text-vertical';
    columns[4].cssClass = 'text-vertical';
    columns[5].cssClass = 'text-vertical';
    columns[6].cssClass = 'text-vertical';
    columns[7].cssClass = 'text-vertical';
    columns[8].cssClass = 'text-vertical';
    columns[9].cssClass = 'text-vertical';
    columns[10].cssClass = 'text-vertical';
    columns[11].cssClass = 'text-vertical';
    columns[12].cssClass = 'text-vertical';
    columns[13].cssClass = 'text-vertical';
    columns[14].cssClass = 'text-vertical';
    columns[15].cssClass = 'text-vertical';
    columns[16].cssClass = 'text-vertical';
    columns[17].cssClass = 'text-vertical';
    columns[18].cssClass = 'text-vertical';
    columns[19].cssClass = 'text-vertical';
    columns[20].cssClass = 'text-vertical';
    columns[21].cssClass = 'text-vertical';
    columns[22].cssClass = 'text-vertical';
    columns[23].cssClass = 'text-vertical';
    columns[24].cssClass = 'text-vertical';
    columns[25].cssClass = 'text-vertical';
    columns[26].cssClass = 'text-vertical';
    columns[27].cssClass = 'text-vertical';
    columns[28].cssClass = 'text-vertical';
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
