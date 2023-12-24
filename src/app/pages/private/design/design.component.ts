import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'devextreme/data/odata/store';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

  pageData = {
    formType: 'list', 
    coldIsEnabled: false,
    packetIsEnabled: false,
    fileUploader1: true,
    fileUploader2: false,
    fileUploader3: false,
    imagePreviewBox: [] as any
  }
  designData = {
    packageType: 0,
  };

  dataSource: any;
  priority: any[];
  date: Date = new Date();
  printType: any = [
    {
      id: 1,
      text: 'به همراه تصویر نوع دوخت',

    },
    {
      id: 2,
      text: 'به همراه تصویر نوع برش',

    },
    {
      id: 3,
      text: 'به همراه تصویر نوع پانچ',

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

  radioGroupValue = this.packageType[0];
  order: any;
  colCountByScreen: object;

  constructor(private route: ActivatedRoute) {
    this.order = {
      FirstName: '',
      LastName: '',
      BirthDate: new Date(),
    };
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
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
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.pageData.formType= data['formType']);
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

  enableCold() {
    this.pageData.coldIsEnabled = !this.pageData.coldIsEnabled;
  }

  enablePacket() {
    this.pageData.packetIsEnabled = !this.pageData.packetIsEnabled;
  }

  onSubmitOrder() {
    console.log("order form submited", this.designData);
  }

}

