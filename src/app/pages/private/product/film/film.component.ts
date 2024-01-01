import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})

export class FilmComponent implements OnInit {

  @ViewChild('dataGridRef', { static: false }) dataGrid: DxDataGridComponent | undefined;

  pageData = {
    formType: 'list',
    gridBoxValue: [] as number[],

    products: [{
      id: 1,
      filmId: 10001,
      name: "فیلم 1",
      unit: 'کیلوگرم',
      printProductCode: 100,
      gsm: 1.20,
      preCode: 100,
      boobin: 10,
      threatment: true,
      thretmentPosition: 'inside',
      friction: 'normal',
      antiStatic: true,
      antiFug: true,
      sewable: true,
      sewablePosition: 'inside',
      packageType: 'horizontal',
      description: 'توضیحات'
    },
    {
      id: 2,
      filmId: 10002,
      name: "فیلم 2",
      unit: 'کیلوگرم',
      printProductCode: 100,
      gsm: 1.20,
      preCode: 100,
      boobin: 10,
      threatment: false,
      thretmentPosition: 'inside',
      friction: 'normal',
      antiStatic: false,
      antiFug: false,
      sewable: false,
      sewablePosition: 'inside',
      packageType: 'horizontal',
      description: 'توضیحات'
    },
    {
      id: 3,
      filmId: 10003,
      name: "فیلم 3",
      unit: 'کیلوگرم',
      printProductCode: 100,
      gsm: 1.20,
      preCode: 100,
      boobin: 10,
      threatment: true,
      thretmentPosition: 'inside',
      friction: 'normal',
      antiStatic: true,
      antiFug: true,
      sewable: true,
      sewablePosition: 'inside',
      packageType: 'horizontal',
      description: 'توضیحات'
    },],

    customizeProductsColumns(columns: any) {
      columns[0].width = 0;

      columns[1].caption = "شناسه فیلم";
      columns[2].caption = "نام فیلم";
      columns[3].caption = "واحد";
      columns[4].caption = "کد کالا چاپ";
      columns[5].caption = "گرماژ";
      columns[6].caption = "پیش کد";
      columns[7].caption = "بوبین";
      columns[8].caption = "تریتمنت";
      columns[9].caption = "طرف تریتمنت";
      columns[10].caption = "اصطحکاک";
      columns[11].caption = "آنتی استاتیک";
      columns[12].caption = "آنتی فاگ";
      columns[13].caption = "دوخت پذیر";
      columns[14].caption = "طرف دوخت پذیر";
      columns[15].caption = "نوع بسته بندی";
      columns[16].caption = "توضیحات";

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
    },
  }

  productData = {
    packageType: 0,
  };

  printSystemCode: any = [
    {
      id: 1,
      text: 'کد 1',
    },
    {
      id: 2,
      text: 'کد 2',
    },
    {
      id: 3,
      text: 'کد 3',
    }];

  unit: any = [
    {
      id: 1,
      text: 'کیلوگرم',
    },
    {
      id: 2,
      text: 'متر مربع',
    },
    {
      id: 3,
      text: 'سانتیمتر مربع',
    },
    {
      id: 4,
      text: 'میلیمیتر مربع',
    },
    {
      id: 5,
      text: 'رول',
    }];

  threatmentPosition: any = [
    {
      id: 1,
      text: 'Inside',
    },
    {
      id: 2,
      text: 'Outside',
    },
    {
      id: 3,
      text: 'Both',
    },];

  metalPowderPosition: any = [
    {
      id: 1,
      text: 'Inside',
    },
    {
      id: 2,
      text: 'Outside',
    },];

  packingType: any = [
    {
      id: 1,
      text: 'Horizontal',
    },
    {
      id: 2,
      text: 'Vertical',
    },];

  COF: any = [
    {
      id: 1,
      text: 'Low',
    },
    {
      id: 2,
      text: 'Normal',
    },
    {
      id: 3,
      text: 'High',
    },];

  constructor(private route: ActivatedRoute, private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.pageData.formType = data['formType']);
  }

  onSubmitNewProduct() {
    console.log("order form submited", this.productData);
  }
}

