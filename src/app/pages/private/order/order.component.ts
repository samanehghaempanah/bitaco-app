import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

export class OrderComponent implements OnInit {

  pageData = {
    formType: 'list',
  }

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
  }]

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
  }]

  // My Orders
  dataSource: any;
  priority: any[];
  date: Date = new Date();

  // New Order
  order: any;
  colCountByScreen: object;
  isGridBoxOpened = false;
  gridBoxValue: number[] = [];

  constructor(private route: ActivatedRoute) {
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
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.pageData.formType = data['formType']);
  }

  onSubmitOrder() {
    console.log("order form submited", this.orderData);
  }
}
