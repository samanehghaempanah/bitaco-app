import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-coding',
  templateUrl: './products-coding.component.html',
  styleUrls: ['./products-coding.component.scss']
})
export class ProductsCodingComponent implements OnInit {

  pageData = {

    gridBoxValue: [] as number[],

    products: [{
      "id": 1,
      "code": 100,
      "name": "کالا 1",
      "unit": "بسته",
      "description": "توضیحات",
      "preCode": "BDR075",
      "preName": "پیش نام کالا",
      "inventory": 50,
      "accountingCode": "11000011",
    },
    {
      "id": 2,
      "code": 101,
      "name": "کالا 2",
      "unit": "بسته",
      "description": "توضیحات",
      "preCode": "BDR075",
      "preName": "پیش نام کالا",
      "inventory": 50,
      "accountingCode": "11000012",
    },
    {
      "id": 3,
      "code": 102,
      "name": "کالا 3",
      "unit": "بسته",
      "description": "توضیحات",
      "preCode": "BDR075",
      "preName": "پیش نام کالا",
      "inventory": 50,
      "accountingCode": "11000013",
    },],

    customizeColumns(columns: any) {
      columns[0].width = 0;
      columns[1].caption = "کد کالا";
      columns[2].caption = "نام کالا";
      columns[3].caption = "واحد";
      columns[4].caption = "توضیحات";
      columns[5].caption = "پیش کد";
      columns[6].caption = "پیش نام";
      columns[7].caption = "موجودی اطمینان";
      columns[8].caption = "کد حسابداری";

      columns[1].alignment = 'center';
      columns[2].alignment = 'center';
      columns[3].alignment = 'center';
      columns[4].alignment = 'center';
      columns[5].alignment = 'center';
      columns[6].alignment = 'center';
      columns[7].alignment = 'center';
      columns[8].alignment = 'center';
    },

    category: [{
      id: 1,
      name: 'F',
    },
    {
      id: 2,
      name: 'B'
    },
    {
      id: 3,
      name: 'C',
    },
    {
      id: 4,
      name: 'T',
    },
    {
      id: 5,
      name: 'N',
    },
    {
      id: 6,
      name: 'P',
    },
    {
      id: 7,
      name: 'Y',
    },
    {
      id: 8,
      name: 'I',
    },
    {
      id: 9,
      name: 'W',
    },
    {
      id: 10,
      name: 'G',
    },
    {
      id: 11,
      name: 'E',
    }],

    unit: [{
      id: 1,
      name: 'کیلوگرم',
    },
    {
      id: 2,
      name: 'عدد'
    },
    {
      id: 3,
      name: 'لیتر',
    },
    {
      id: 4,
      name: 'متر',
    },
    {
      id: 5,
      name: 'بسته',
    },
    {
      id: 6,
      name: 'جین',
    },
    {
      id: 7,
      name: 'پاکت',
    },
    {
      id: 8,
      name: 'مخزن',
    },
    {
      id: 9,
      name: 'متر مکعب',
    },
    {
      id: 10,
      name: 'متر مربع',
    }],
  }

  constructor() { }

  ngOnInit(): void {
  }
}
