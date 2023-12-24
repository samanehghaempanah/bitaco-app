import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ValidationCallbackData } from 'devextreme-angular/common';
import { DxFormModule } from 'devextreme-angular/ui/form';
import { DxLoadIndicatorModule } from 'devextreme-angular/ui/load-indicator';
import notify from 'devextreme/ui/notify';
import { AuthService } from '../../services';
import { DxRadioGroupModule } from 'devextreme-angular';
import { DxSelectBoxModule } from 'devextreme-angular';


@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.scss']
})
export class CreateAccountFormComponent {
  colCountByScreen: object;
  loading = false;
  dataSource = ["حقیقی", "حقوقی"];

  activityData = [{
    ID: 1,
    Name: 'چاپ',
    Category: 'تولیدی',
  }, {
    ID: 2,
    Name: 'طراحی',
    Category: 'تولیدی',
  }, {
    ID: 3,
    Name: 'آموزشی',
    Category: 'فرهنگی',
  }];

  countryData = [{
    ID: 1,
    Name: 'ایران',
    Code: '+98',
  }, {
    ID: 2,
    Name: 'امریکا',
    Code: '+1',
  }, {
    ID: 3,
    Name: 'ترکیه',
    Code: '+90',
  }];

  provinceData = [{
    ID: 1,
    Name: 'خراسان رضوی',
    CountryId: '+98',
  }, {
    ID: 2,
    Name: 'تهران',
    CountryId: '+98',
  }, {
    ID: 3,
    Name: 'اصفهان',
    CountryId: '+98',
  }];

  cityData = [{
    ID: 1,
    Name: 'مشهد',
    provinceId: '1',
  }, {
    ID: 2,
    Name: 'تهران',
    provinceId: '2',
  }, {
    ID: 3,
    Name: 'اصفهان',
    provinceId: '3',
  }];

  radioGroupValue = this.dataSource[0];
  formData: any = {};

  constructor(private authService: AuthService, private router: Router) { 
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 2,
      lg: 2
    };
  }

  async onSubmit(e: Event) {
    e.preventDefault();
    const { email, password } = this.formData;
    this.loading = true;

    const result = await this.authService.createAccount(email, password);
    this.loading = false;

    if (result.isOk) {
      this.router.navigate(['/login-form']);
    } else {
      notify(result.message, 'error', 2000);
    }
  }

  confirmPassword = (e: ValidationCallbackData) => {
    return e.value === this.formData.password;
  }
}
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DxFormModule,
    DxLoadIndicatorModule,
    DxRadioGroupModule,
    DxSelectBoxModule
  ],
  declarations: [CreateAccountFormComponent],
  exports: [CreateAccountFormComponent]
})
export class CreateAccountFormModule { }
