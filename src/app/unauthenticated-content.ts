import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SingleCardModule } from 'src/app/layouts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unauthenticated-content',
  template: `
    <app-single-card [title]="title" [description]="description">
      <router-outlet></router-outlet>
    </app-single-card>
  `,
  styles: [`
    :host {
      width: 100%;
      height: 100%;
    }
  `]
})
export class UnauthenticatedContentComponent {

  constructor(private router: Router) { }

  get title() {
    const path = this.router.url.split('/')[1];
    switch (path) {
      case 'login-form': return 'ورود';
      case 'reset-password': return 'باز نشانی رمز عبور';
      case 'create-account': return 'ثبت نام';
      case 'change-password': return 'تغییر پسورد';
      default: return '';
    }
  }

  get description() {
    const path = this.router.url.split('/')[1];
    switch (path) {
      // case 'reset-password': return 'Please enter the email address that you used to register, and we will send you a link to reset your password via Email.';
      case 'reset-password': return 'لطفا ایمیلی که با آن ثبت نام انجام داده اید را وارد کنید، لینک تغییر پسورد برای شما ایمیل خواهد شد.';
      default: return '';
    }
  }
}
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SingleCardModule,
  ],
  declarations: [UnauthenticatedContentComponent],
  exports: [UnauthenticatedContentComponent]
})
export class UnauthenticatedContentModule { }
