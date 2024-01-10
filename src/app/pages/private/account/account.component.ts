import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import notify from 'devextreme/ui/notify';
import { BaseService } from 'src/app/services/base.service';
import { AccountService } from 'src/app/services/account.service';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})

export class AccountComponent implements OnInit {
  formMode = "add";
  myAccounts: any = [];
  formData = {
    id: 0,
    accountName: '',
    cardNumber: '',
    accountNumber: '',
    shebaNumber: ''
  }

  constructor(private clipboard: Clipboard, public baseService: BaseService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.GetAccountData();
  }

  async GetAccountData() {
    this.myAccounts = [];
    this.baseService.loading = true;
    try {
      let data = {
        'BankAccountNumberID': null,
        'CustomerID': 100
      };
      let model = {
        "spName": "[Customer].[BankAccountNumber_Select]",
        "inputParameter": JSON.stringify(data)
      };
      let result = await this.accountService.HTTP_Request(model);
      if (result.isSuccess) {
        let accounts = JSON.parse(result.data.data);
        accounts.forEach((item: any) => {
          this.myAccounts.push({
            key: "حساب " + item.Bank,
            items: [{
              id: item.BankAccountNumberID,
              name: item.Bank,
              card: item.CardNumber,
              account: item.AccountNumber,
              sheba: item.ShabaNumber,
              insertDate: item.InsertDate,
              insertUserName: item.InsertUserName,
              updateDate: item.UpdateDate,
              updateUsername: item.UpdateUsername,
            }]
          });
        });
        console.log("this.myAccounts", this.myAccounts);
        result.message ?? this.baseService.notify(result.message, "success");
      }
      else {
        this.baseService.notify("خطا در نمایش اطلاعات حساب!", "error");
        result.message ?? this.baseService.notify(result.message, "error");
      }
    }
    catch { }
    this.baseService.loading = false;
  }

  async addAccountData() {
    this.baseService.loading = true;
    try {
      let data = {
        'CustomerID': 100,
        'BankAccountNumberID': null,
        'Bank': this.formData.accountName,
        'AccountNumber': this.formData.accountNumber,
        'CardNumber': this.formData.cardNumber,
        'ShabaNumber': this.formData.shebaNumber
      };
      let model = {
        "spName": "[Customer].[BankAccountNumber_Modification]",
        "inputParameter": JSON.stringify(data)
      };
      let result = await this.accountService.HTTP_Request(model);
      if (result.isSuccess) {
        this.formData = {
          id: 0,
          accountName: '',
          cardNumber: '',
          accountNumber: '',
          shebaNumber: ''
        };
        this.baseService.notify("حساب جدید با موفقیت افزوده شد.", "success");
        result.message ?? this.baseService.notify(result.message, "success");
        this.GetAccountData();
      }
      else {
        this.baseService.notify("مشکل در افزودن حساب جدید!", "error");
        result.message ?? this.baseService.notify(result.message, "error");
      }
    }
    catch { }
    this.baseService.loading = false;
  }

  async deleteAccountData(id: number) {
    this.baseService.loading = true;
    try {
      let data = {
        'CustomerID': 100,
        'BankAccountNumberID': id,
        'IsDeleted': 1
      };
      let model = {
        "spName": "[Customer].[BankAccountNumber_Modification]",
        "inputParameter": JSON.stringify(data)
      };
      let result = await this.accountService.HTTP_Request(model);
      if (result.isSuccess) {
        this.baseService.notify("حساب مورد نظر با موفقیت حذف شد.", "success");
        result.message ?? this.baseService.notify(result.message, "success");
        this.GetAccountData();
      }
      else {
        this.baseService.notify("خطا در حذف حساب موردنظر!", "error");
        result.message ?? this.baseService.notify(result.message, "error");
      }
    }
    catch { }
    this.baseService.loading = false;
  }

  async editAccountData() {
    this.baseService.loading = true;
    try {
      let data = {
        'CustomerID': 100,
        'BankAccountNumberID': this.formData.id,
        'Bank': this.formData.accountName,
        'AccountNumber': this.formData.accountNumber,
        'CardNumber': this.formData.cardNumber,
        'ShabaNumber': this.formData.shebaNumber
      };
      let model = {
        "spName": "[Customer].[BankAccountNumber_Modification]",
        "inputParameter": JSON.stringify(data)
      };
      let result = await this.accountService.HTTP_Request(model);
      if (result.isSuccess) {
        this.formData = {
          id: 0,
          accountName: '',
          cardNumber: '',
          accountNumber: '',
          shebaNumber: ''
        };
        this.formMode = "add";
        this.baseService.notify("حساب موردنظر با موفقیت بروز رسانی شد.", "success");
        result.message ?? this.baseService.notify(result.message, "success");
        this.GetAccountData();
      }
      else {
        this.baseService.notify("خطا در بروز رسانی حساب موردنظر!", "error");
        result.message ?? this.baseService.notify(result.message, "error");
      }
    }
    catch { }
    this.baseService.loading = false;
  }

  handleEditAccount(acc: any) {
    this.formMode = "edit";
    this.formData.id = acc.id;
    this.formData.accountName = acc.name;
    this.formData.cardNumber = acc.card;
    this.formData.accountNumber = acc.account;
    this.formData.shebaNumber = acc.sheba;
  }

  showCopyToClipboard(item: string, copyContent: string) {
    let selectedItem: string = '';
    switch (item) {
      case "copyCard":
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

  // async SendAccountData() {
  //   try {
  //     let inputParameter = JSON.stringify(this.formData);
  //     console.log("inputParameter:", inputParameter);
  //     let model = {
  //       "spName": "Product.Product_Modification",
  //       "inputParameter": inputParameter
  //     };
  //     let result = await this.productService.HTTP_Request(model);
  //     if (result) {
  //       console.log("result", result);
  //     }
  //     else {
  //       // this.baseService.toast('لطفا مقدار صحیح برای بارکد وارد کنید!', 'danger');
  //       console.log("you get an error!");
  //     }
  //   }
  //   catch { }
  // }
}
