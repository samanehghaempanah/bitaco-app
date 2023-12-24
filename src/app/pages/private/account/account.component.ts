import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  targetElement1: Element;
  targetElement2: Element;
  targetElement3: Element;
  accountType: any = [
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

  myAccounts: any = [{
    key: "حساب سامان",
    items: [{
      id: 1,
      name: "سامان",
      cart: "6752-6017-0232-3356",
      account: "037053000",
      sheba: "IR001245000012536",
    }]
  },
  {
    key: "حساب ملی",
    items: [{
      id: 2,
      name: "ملی",
      cart: "6752-6017-0232-3356",
      account: "037053000",
      sheba: "IR001245000012536",
    }]
  },
  {
    key: "حساب ملت",
    items: [{
      id: 3,
      name: "ملت",
      cart: "6752-6017-0232-3356",
      account: "037053000",
      sheba: "IR001245000012536",
    }]
  },
  {
    key: "حساب صادرات",
    items: [{
      id: 4,
      name: "صادرات",
      cart: "6752-6017-0232-3356",
      account: "037053000",
      sheba: "IR001245000012536",
    }]
  }];

  constructor(private clipboard: Clipboard) {
    this.targetElement1 = document.getElementById('#targetElement1') as Element;
    this.targetElement2 = document.getElementById('#targetElement2') as Element;
    this.targetElement3 = document.getElementById('#targetElement3') as Element;
  }

  ngOnInit(): void {
  }

  showCopyToClipboard(item: string, copyContent: string) {
    let selectedItem: string = '';
    switch (item) {
      case "copyCart":
        selectedItem = "شماره کارت";
        break;
      case "copyAccount":
        selectedItem = "شماره حساب";
        break;
      case "copySheba":
        selectedItem = "شماره شبا";
        break;
    }
    notify(
      {
        message: selectedItem + " در حافظه کپی شد!",
        width: 230,
        position: {
          at: "bottom",
          my: "bottom",
          of: "#container"
        }
      },
      'success',
      500
    );
    this.clipboard.copy(copyContent)
  }
}
