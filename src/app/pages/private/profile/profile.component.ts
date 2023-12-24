import { Component } from '@angular/core';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {
  headerInfo: any;
  employee: any;
  colCountByScreen: object;

  constructor() {

    this.headerInfo = {
      Notes: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
      Picture: '/assets/images/profile.png',
    };

    this.employee = {
      'شماره پرسنلی': 4208,
      'نام': 'سمانه',
      'نام خانوادگی': 'قائم پناه',
      'جنسیت': 'خانم',
      'سمت': 'برنامه نویس',
      'تصویر پرسنلی': '/assets/images/profile.png',
      'تاریخ تولد': new Date('1988/10/21'),
      'تاریخ استخدام': new Date('2023/11/5'),
      'توضیحات': 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
      'آدرس': 'مشهد',
      /* tslint:disable-next-line:max-line-length */
    };

    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };
  }
}
