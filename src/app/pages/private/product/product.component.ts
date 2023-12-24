import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DxDataGridComponent } from 'devextreme-angular';
import ArrayStore from "devextreme/data/array_store";
import notify from 'devextreme/ui/notify';
import 'devextreme/data/odata/store';
import * as moment from 'jalali-moment';
import { ColorModel, DesignModel } from 'src/app/shared/definitions/models/entities.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @ViewChild('dataGridRef', { static: false }) dataGrid: DxDataGridComponent | undefined;
  selectedRowsData: any = [];
  finalData: any = [];
  isRowsSelected = false;
  creationDate: Date = new Date();
  imageView = false;

  pageData = {
    formType: 'list',
    packetIsEnabled: false,
    punchIsEnabled: false,
    printIsEnabled: false,
    matteIsEnabled: false,
    coldIsEnabled: false,
    varnishIsEnabled: false,
    fileUploader1: true,
    fileUploader2: false,
    fileUploader3: false,
    imagePreviewBox: [] as any,
    persianName: '',
    numberOfDesigns: 0,
    numberOfColors: 0,
    NewDocFormVisible: false,
    EditDocFormVisible: false,
    ViewDocFormVisible: false,
    NewDocFormButtonOptions: {},
    EditDocFormButtonOptions: {},
    popupVisible: false,
  }

  newDocFormData = {
    type: '',
    description: '',
    path: '',
    fileData: {} as any,
  }

  editDocFormData = {
    id: 0,
    type: '',
    description: '',
    path: '',
    fileData: {} as any,
  }

  viewDocFile = '';

  productData = {
    packageType: 0,
  };

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

  docFileType: any = [
    {
      id: 0,
      text: 'unknown',
    },
    {
      id: 1,
      text: 'pdf',
    },
    {
      id: 2,
      text: 'doc',
    },
    {
      id: 3,
      text: 'xls',
    },
    {
      id: 4,
      text: 'txt',
    },
    {
      id: 5,
      text: 'ppt',
    },
    {
      id: 6,
      text: 'png',
    },
    {
      id: 7,
      text: 'jpg',
    },
    {
      id: 8,
      text: 'psd',
    }];

  productType: any = [
    {
      id: 1,
      text: 'OPP',
    },
    {
      id: 2,
      text: 'OPP-CPP',
    },
    {
      id: 3,
      text: 'OPP-PET-PE',
    }
    ,
    {
      id: 4,
      text: 'PE',
    },
    {
      id: 5,
      text: 'OPP-PE',
    },
    {
      id: 3,
      text: 'PET-PE',
    },
    {
      id: 3,
      text: 'PVC',
    },
    {
      id: 3,
      text: 'PET',
    },
    {
      id: 3,
      text: 'PET-ALL-PE',
    },
    {
      id: 3,
      text: 'PET-AL-PET-PE',
    }];

  printType: any = [
    {
      id: 1,
      text: 'هلیوگراور',

    },
    {
      id: 2,
      text: 'فلکسوگراور',

    }];

  coverageType: any = [
    {
      id: 1,
      text: 'مات کننده',

    },
    {
      id: 2,
      text: 'براق',

    }];

  printMethod: any = [
    {
      id: 1,
      text: 'چاپ از زیر',

    },
    {
      id: 2,
      text: 'چاپ از رو',

    }];

  SewingType: any = [
    {
      id: 1,
      text: 'B-B',

    },
    {
      id: 2,
      text: 'A-B',

    },
    {
      id: 3,
      text: 'A-A',

    }];

  uploadType: any = [
    {
      id: 1,
      text: 'فایل طرح',

    },
    {
      id: 2,
      text: 'طرح سفید',

    },
    {
      id: 3,
      text: 'تصویر الگو',

    }];

  fileExtention: any = [
    'pdf',
    'tiff',
    'ai',
    'psd'];

  imageExtention: any = [
    'pdf',
    'jpg'];

  selectedFiles: any = [
    {
      id: 1,
      image: '',

    },];

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

  // My Products
  dataSource: any;
  priority: any[];
  date: Date = new Date();

  // New Product
  order: any;
  colCountByScreen: object;
  gridDataSource: ArrayStore;
  documentGridDataSource: ArrayStore;
  isGridBoxOpened = false;
  gridBoxValue: number[] = [];
  gridBoxDocumentValue: number[] = [];

  colors = [{
    "id": 1,
    "name": 'BLACK',
    "color": '#000',
  }, {
    "id": 2,
    "name": 'MAGENTA',
    "color": '#fff',
  }, {
    "id": 3,
    "name": 'CYAN',
    "color": '#fff',
  }, {
    "id": 4,
    "name": 'YELLOW',
    "color": '#fff',
  }, {
    "id": 5,
    "name": 'WHITE',
    "color": '#fff',
  }, {
    "id": 6,
    "name": 'GOLD',
    "color": '#fff',
  }, {
    "id": 7,
    "name": 'SILVER',
    "color": '#fff',
  }, {
    "id": 8,
    "name": 'GREEN',
    "color": '#fff',
  }, {
    "id": 9,
    "name": 'SPOT1',
    "color": '#fff',
  }, {
    "id": 10,
    "name": 'SPOT2',
    "color": '#fff',
  }, {
    "id": 11,
    "name": 'SPOT3',
    "color": '#fff',
  }, {
    "id": 12,
    "name": 'COLDSEAL',
    "color": '#fff',
  }, {
    "id": 13,
    "name": 'LAQUER',
    "color": '#fff',
  }];

  colorsData: ColorModel[] = [];

  varnishData: any = [{
    id: 1,
    coverageType: '',
    coverage: '',
    GSM: '',
  }];

  designsList: any = [{
    id: 1,
    name: 'چاکلز 2*2',
    type: 'فایل طرح',
    weight: '1g',
    date: moment(new Date()).locale('fa').format('YYYY/MM/DD'),
    image: '/assets/images/design/1.png',
  }, {
    id: 2,
    name: 'چاکلز 3*3',
    type: 'فایل طرح',
    weight: '1g',
    date: moment(new Date()).locale('fa').format('YYYY/MM/DD'),
    image: '/assets/images/design/2.jpg',
  }, {
    id: 3,
    name: 'چاکلز 4*4',
    type: 'فایل طرح',
    weight: '1g',
    date: moment(new Date()).locale('fa').format('YYYY/MM/DD'),
    image: '/assets/images/design/1.png',
  }, {
    id: 4,
    name: 'چاکلز 5*5',
    type: 'فایل طرح',
    weight: '1g',
    date: moment(new Date()).locale('fa').format('YYYY/MM/DD'),
    image: '/assets/images/design/2.jpg',
  }];

  documents: any = [{
    id: 1,
    type: "فایل اولیه مشتری",
    name: "سیلندر.pdf",
    // path: "/assets/files/1.png",
    description: "برای تست است",
    suffix: "pdf",
    date: moment(new Date()).locale('fa').format('YYYY/MM/DD'),
    hour: moment(new Date()).locale('fa').format('HH:mm'),
    Registrar: "سمانه قائم پناه",
    edit: "edit",
    view: "eyeopen",
    download: "download"
  },
  {
    id: 2,
    type: "فایل اولیه مشتری",
    name: "سیلندر.png",
    // path: "/assets/files/1.png",
    description: "برای تست است",
    suffix: "png",
    date: moment(new Date()).locale('fa').format('YYYY/MM/DD'),
    hour: moment(new Date()).locale('fa').format('HH:mm'),
    Registrar: "سمانه قائم پناه",
    edit: "edit",
    view: "eyeopen",
    download: "download"
  },
  {
    id: 3,
    type: "فایل اولیه مشتری",
    name: "سیلندر.psd",
    // path: "/assets/files/1.png",
    description: "برای تست است",
    suffix: "psd",
    date: moment(new Date()).locale('fa').format('YYYY/MM/DD'),
    hour: moment(new Date()).locale('fa').format('HH:mm'),
    Registrar: "سمانه قائم پناه",
    edit: "edit",
    view: "eyeopen",
    download: "download"
  },
  {
    id: 4,
    type: "فایل اولیه مشتری",
    name: "سیلندر.txt",
    // path: "/assets/files/1.png",
    description: "برای تست است",
    suffix: "txt",
    date: moment(new Date()).locale('fa').format('YYYY/MM/DD'),
    hour: moment(new Date()).locale('fa').format('HH:mm'),
    Registrar: "سمانه قائم پناه",
    edit: "edit",
    view: "eyeopen",
    download: "download"
  },
  {
    id: 5,
    type: "فایل اولیه مشتری",
    name: "سیلندر.jpg",
    // path: "/assets/files/1.png",
    description: "برای تست است",
    suffix: "jpg",
    date: moment(new Date()).locale('fa').format('YYYY/MM/DD'),
    hour: moment(new Date()).locale('fa').format('HH:mm'),
    Registrar: "سمانه قائم پناه",
    edit: "edit",
    view: "eyeopen",
    download: "download"
  },
  {
    id: 6,
    type: "فایل اولیه مشتری",
    name: "سیلندر.doc",
    // path: "/assets/files/1.png",
    description: "برای تست است",
    suffix: "doc",
    date: moment(new Date()).locale('fa').format('YYYY/MM/DD'),
    hour: moment(new Date()).locale('fa').format('HH:mm'),
    Registrar: "سمانه قائم پناه",
    edit: "edit",
    view: "eyeopen",
    download: "download"
  },
  {
    id: 7,
    type: "فایل اولیه مشتری",
    name: "سیلندر.xls",
    // path: "/assets/files/1.png",
    description: "برای تست است",
    suffix: "xls",
    date: moment(new Date()).locale('fa').format('YYYY/MM/DD'),
    hour: moment(new Date()).locale('fa').format('HH:mm'),
    Registrar: "سمانه قائم پناه",
    edit: "edit",
    view: "eyeopen",
    download: "download"
  },
  {
    id: 8,
    type: "فایل اولیه مشتری",
    name: "سیلندر.ppt",
    // path: "/assets/files/1.png",
    description: "برای تست است",
    suffix: "ppt",
    date: moment(new Date()).locale('fa').format('YYYY/MM/DD'),
    hour: moment(new Date()).locale('fa').format('HH:mm'),
    Registrar: "سمانه قائم پناه",
    edit: "edit",
    view: "eyeopen",
    download: "download"
  },
  {
    id: 9,
    type: "فایل اولیه مشتری",
    name: "سیلندر.io",
    // path: "/assets/files/1.png",
    description: "برای تست است",
    suffix: "unknown",
    date: moment(new Date()).locale('fa').format('YYYY/MM/DD'),
    hour: moment(new Date()).locale('fa').format('HH:mm'),
    Registrar: "سمانه قائم پناه",
    edit: "edit",
    view: "eyeopen",
    download: "download"
  }];

  LaminateType: any = [
    {
      id: 1,
      text: 'SB',
    },
    {
      id: 2,
      text: 'SF',
    },
    {
      id: 3,
      text: 'CO',
    }];

  packageType: any = [
    {
      id: 1,
      image: '/assets/images/package/package1.jpg',

    },
    {
      id: 2,
      image: '/assets/images/package/package2.jpg',

    },
    {
      id: 3,
      image: '/assets/images/package/package3.jpg',

    },
    {
      id: 4,
      image: '/assets/images/package/package4.jpg',

    }];

  coldType: any = [
    {
      id: 1,
      image: '/assets/images/cold/cold1.jpg',

    },
    {
      id: 1,
      image: '/assets/images/cold/cold2.jpg',

    },
    {
      id: 1,
      image: '/assets/images/cold/cold3.jpg',

    },
    {
      id: 1,
      image: '/assets/images/cold/cold4.jpg',

    },
    {
      id: 1,
      image: '/assets/images/cold/cold5.jpg',

    },
    {
      id: 1,
      image: '/assets/images/cold/cold6.jpg',

    },
    {
      id: 1,
      image: '/assets/images/cold/cold7.jpg',

    },
    {
      id: 1,
      image: '/assets/images/cold/cold8.jpg',

    },
    {
      id: 1,
      image: '/assets/images/cold/cold9.jpg',

    },
    {
      id: 1,
      image: '/assets/images/cold/cold10.jpg',

    },
    {
      id: 1,
      image: '/assets/images/cold/cold11.jpg',

    },
    {
      id: 1,
      image: '/assets/images/cold/cold12.jpg',

    }];

  packeting: any = [
    {
      id: 1,
      title: 'ساده',

    },
    {
      id: 2,
      title: 'لب چسب دار',

    },
    {
      id: 3,
      title: 'زیپ کیپ',

    }];

  packetType: any = [
    {
      id: 1,
      image: '/assets/images/packet/packet1.jpg',
    },
    {
      id: 2,
      image: '/assets/images/packet/packet2.jpg',
    },
    {
      id: 3,
      image: '/assets/images/packet/packet3.jpg',
    },
    {
      id: 4,
      image: '/assets/images/packet/packet4.jpg',
    },
    {
      id: 5,
      image: '/assets/images/packet/packet5.jpg',
    }];

  punchType: any = [
    {
      id: 1,
      image: '/assets/images/punch/1.png',
    },
    {
      id: 2,
      image: '/assets/images/punch/2.png',
    },
    {
      id: 3,
      image: '/assets/images/punch/3.png',
    },
    {
      id: 4,
      image: '/assets/images/punch/4.png',
    },
    {
      id: 5,
      image: '/assets/images/punch/5.png',
    },
    {
      id: 6,
      image: '/assets/images/punch/6.png',
    },
    {
      id: 7,
      image: '/assets/images/punch/7.png',
    },
    {
      id: 8,
      image: '/assets/images/punch/8.png',
    },
    {
      id: 9,
      image: '/assets/images/punch/9.png',
    },
    {
      id: 10,
      image: '/assets/images/punch/10.png',
    }];

  radioGroupValue = this.packageType[0];

  tabContent: string;
  designTabId: number;
  designTabContent: string;
  designCount: number | undefined;

  tabs = [{
    id: 1,
    text: 'اطلاعات اولیه',
    content: 'tab1',
  },
  {
    id: 2,
    text: 'طرح',
    content: 'tab2',
  },
  {
    id: 3,
    text: 'لمینت و لاک',
    content: 'tab3',
  },
  {
    id: 4,
    text: 'برش',
    content: 'tab4',
  },
  {
    id: 5,
    text: 'بسته بندی و ارسال',
    content: 'tab5',
  },
  {
    id: 6,
    text: 'سیلندر و کلیشه',
    content: 'tab6',
  },
  {
    id: 7,
    text: 'اطلاعات تکمیلی',
    content: 'tab7',
  },
  {
    id: 8,
    text: 'مستندات',
    content: 'tab8',
  }];

  // designsTabs: DesignModel[] = [{
  //   id: 1,
  //   text: 'طرح 1',
  //   content: 'tab2',
  // },
  // {
  //   id: 2,
  //   text: 'طرح 2',
  //   content: 'tab2',
  // },
  // {
  //   id: 3,
  //   text: 'طرح 3',
  //   content: 'tab2',
  // },];

  designsTabs: DesignModel[] = [];

  selectedDesign = this.designsTabs[0];

  constructor(private route: ActivatedRoute, private ref: ChangeDetectorRef) {

    this.tabContent = this.tabs[0].content;
    this.designTabContent = this.designsTabs[0]?.content;
    this.designTabId = this.designsTabs[0]?.id;

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

    this.dataSource = {
      store: {
        type: 'odata',
        key: 'Task_ID',
        url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks'
      },
      expand: 'ResponsibleEmployee',
      select: [
        'Task_ID',
        'Task_Subject',
        'Task_Start_Date',
        'Task_Due_Date',
        'Task_Status',
        'Task_Priority',
        'Task_Completion',
        'ResponsibleEmployee/Employee_Full_Name'
      ]
    };

    this.priority = [
      { name: 'High', value: 4 },
      { name: 'Urgent', value: 3 },
      { name: 'Normal', value: 2 },
      { name: 'Low', value: 1 }
    ];

    this.gridDataSource = new ArrayStore({
      key: "id",
      data: this.designsList,
    });

    this.documentGridDataSource = new ArrayStore({
      key: "id",
      data: this.documents,
    });

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
            name: this.newDocFormData.fileData[0].name,
            // path: '/assets/files/' + this.newDocFormData.fileData[0].name,
            description: this.newDocFormData.description,
            suffix: this.newDocFormData.fileData[0].type.split("/", 2)[1],
            date: moment(new Date()).locale('fa').format('YYYY/MM/DD'),
            hour: moment(new Date()).locale('fa').format('HH:mm'),
            Registrar: 'سمانه قائم پناه',
            edit: 'edit',
            view: 'eyeopen',
            download: 'download'
          });
        }
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

  onEditDocFile(item: any) {
    this.editDocFormData = item;
    console.log("editDocFormData:", this.editDocFormData);
    this.pageData.EditDocFormVisible = true;
  }

  onViewDocFile(item: any) {
    this.viewDocFile = item.path;
    console.log("viewDocFile:", this.viewDocFile);
    this.pageData.ViewDocFormVisible = true;
  }

  selectTab(e: any) {
    this.tabContent = this.tabs[e.itemIndex].content;
  }

  selectDesignTab(e: any) {
    this.designCount = e.itemIndex + 1;
    this.designTabContent = this.designsTabs[e.itemIndex].content;
    this.designTabId = this.designsTabs[e.itemIndex].id;
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.pageData.formType = data['formType']);
  }

  getSelectedData() {
    this.isRowsSelected = true;
    this.selectedRowsData = this.dataGrid?.instance.getSelectedRowsData();
    this.dataGrid?.instance.getSelectedRowsData().then((selectedRowsData) => {
      console.log("selectedRowsData", selectedRowsData);
      this.selectedRowsData = selectedRowsData;
      if (selectedRowsData.length === 0) {
        this.isRowsSelected = false;
      }
    });
  }

  enablePrint() {
    this.pageData.printIsEnabled = !this.pageData.printIsEnabled;
  }

  enableMatte() {
    this.pageData.matteIsEnabled = !this.pageData.matteIsEnabled;
  }

  enableVarnish() {
    this.pageData.varnishIsEnabled = !this.pageData.varnishIsEnabled;
  }

  enableCold() {
    this.pageData.coldIsEnabled = !this.pageData.coldIsEnabled;
  }

  enablePacket() {
    this.pageData.packetIsEnabled = !this.pageData.packetIsEnabled;
  }

  enablePunch() {
    this.pageData.punchIsEnabled = !this.pageData.punchIsEnabled;
  }

  onSubmitNewOrder() {
    console.log("لیست محصولات اتخاب شده", this.selectedRowsData);
    let Task_IDs: any = [];
    for (let item of this.selectedRowsData) {
      Task_IDs.push(item.Task_ID);
    }
    alert("ارسال سطرهای " + Task_IDs + " به صفحه سفارش");

  }

  onSubmitNewProduct() {
    console.log("order form submited", this.productData);
  }

  customizeColumns(columns: any) {
    columns[0].width = 0;
    columns[1].caption = 'نام طرح';
    columns[2].caption = 'نوع طرح';
    columns[3].caption = 'وزن محصول';
    columns[4].caption = 'تاریخ';
    columns[5].caption = 'فایل طرح';
    columns[1].alignment = 'center';
    columns[2].alignment = 'center';
    columns[3].alignment = 'center';
    columns[4].alignment = 'center';
    columns[5].alignment = 'center';
  }

  customizeDocumentColumns(columns: any) {
    columns[0].width = 0;
    columns[1].caption = "نوع فایل";
    columns[2].caption = "نام فایل";
    // columns[3].caption = "مسیر فایل";
    columns[3].caption = "توضیحات";
    columns[4].caption = "پسوند";
    columns[5].caption = "تاریخ";
    columns[6].caption = "ساعت";
    columns[7].caption = "ثبت کننده";
    columns[8].caption = "ویرایش";
    columns[9].caption = "نمایش";
    columns[10].caption = "دانلود";
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
    // columns[11].alignment = 'center';
    columns[6].width = '80px';
    columns[8].width = '80px';
    columns[9].width = '80px';
    columns[10].width = '80px';
  }

  onGridBoxOptionChanged(e: any) {
    if (e.name === 'value') {
      this.isGridBoxOpened = false;
      this.ref.detectChanges();
    }
  }

  selectUploadType(e: any) {
    switch (e.selectedItem.id) {
      case 1:
        this.pageData.fileUploader1 = true;
        this.pageData.fileUploader2 = false;
        this.pageData.fileUploader3 = false;
        break
      case 2:
        this.pageData.fileUploader1 = false;
        this.pageData.fileUploader2 = true;
        this.pageData.fileUploader3 = false;
        break
      case 3:
        this.pageData.fileUploader1 = false;
        this.pageData.fileUploader2 = false;
        this.pageData.fileUploader3 = true;
        break
    }
  }

  getFilesUploaded(e: any, id: number, title: string) {
    console.log("getFilesUploaded", e);
    console.log("value", e.value[0].name);
    this.pageData.imagePreviewBox.push({ id: id, preURL: '/assets/images/design/', name: e.value[0].name, title: title });
    console.log("images ", this.pageData.imagePreviewBox);
  }

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

  persianNameChanged(e: any) {
    this.pageData.persianName = e.value;
    this.designsTabs[0].text = 'طرح 1' + ' (' + this.pageData.persianName + ') '
  }

  numberOfColorsChanged(e: any) {
    this.colorsData = [];
    this.pageData.numberOfColors = e.value;
    for (let i = 0; i < e.value; i++) {
      this.colorsData.push({
        id: i + 1,
        color: '',
        coverage: '',
        GSM: '',
        l: '',
        a: '',
        b: ''
      });
    }
  }

  numberOfDesignsChanged(e: any) {
    this.designsTabs = [];
    this.pageData.numberOfDesigns = e.value;
    for (let i = 0; i < e.value; i++) {
      this.designsTabs.push({
        id: i + 1,
        text: 'طرح ' + i + 1,
        content: 'tab2',
      });
    }
    this.selectedDesign = this.designsTabs[0];
    // this.pageData.numberOfDesigns = 0;
  }

  addVarnish() {
    let lastId = this.varnishData.at(-1)?.id;
    let newId;
    lastId ? newId = lastId + 1 : -1;
    if (newId) {
      this.varnishData.push({
        id: newId,
        coverageType: '',
        coverage: '',
        GSM: '',
      });
    }
  }

  removeVarnish(id: number) {
    if (this.varnishData.length > 1) {
      this.varnishData = this.varnishData.filter((varnish: any) => varnish.id != id);
    }
  }

  addButtonHandler() {
    this.pageData.numberOfDesigns = this.pageData.numberOfDesigns + 1;
    console.log("last item is", this.designsTabs.at(-1));
    let lastId = this.designsTabs.at(-1)?.id;
    let newId;
    lastId ? newId = lastId + 1 : -1;
    if (newId) {
      this.designsTabs.push({
        id: newId,
        text: 'طرح ' + newId,
        content: 'tab2',
      },);
      this.selectedDesign = this.designsTabs[newId - 1];
    }
  }

  closeButtonHandler(item: any) {
    if (this.pageData.numberOfDesigns != 0) this.pageData.numberOfDesigns = this.pageData.numberOfDesigns - 1;
    const index = this.designsTabs.indexOf(item);
    this.designsTabs.splice(index, 1);
    if (index >= this.designsTabs.length && index > 0) this.selectedDesign = this.designsTabs[index - 1];
    this.showCloseButton();
  }

  showCloseButton() {
    return this.designsTabs.length > 1;
  }

  onSubmitDesign() {
    console.log("designs form submited");
  }

  showNewDocForm(e: any) {
    console.log("showNewDocForm event:", e);
    this.pageData.NewDocFormVisible = true;
  }

  showPopup() {
    this.pageData.popupVisible = true;
  }

  onFormSubmit = function (e: any) {
    notify({
      message: 'You have submitted the form',
      position: {
        my: 'center top',
        at: 'center top',
      },
    }, 'success', 3000);

    e.preventDefault();
  };
}
