import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DxFormModule } from 'devextreme-angular/ui/form';
import { DxLoadIndicatorModule } from 'devextreme-angular/ui/load-indicator';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { BaseService } from 'src/app/services/base.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  loading = false;
  formData: any = {};

  constructor(
    private router: Router,
    private baseService: BaseService,
    private storageService: StorageService,
    private authenticateService: AuthenticateService) { }

  async onSubmit(e: Event) {
    this.baseService.loading = true;
    try {
      e.preventDefault();
      this.loading = true;
      let body = {
        "phoneNumber": this.formData.mobile,
        "password": this.formData.password
      }
      const result = await this.authenticateService.Login(body);
      // console.log("result", result);
      if (result.isSuccess) {
        this.storageService.Token = result.data;
        console.log(result.message);
        // alert(result.message);
        this.loading = false;
        this.router.navigate(['/']);
      }
      else {
        console.log(result.message);
        // alert(result.message);
      }
      this.loading = false;
    }
    catch { }
    this.baseService.loading = false;
  }

  onCreateAccountClick = () => {
    this.router.navigate(['/create-account']);
  }
}
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DxFormModule,
    DxLoadIndicatorModule
  ],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent]
})
export class LoginFormModule { }
