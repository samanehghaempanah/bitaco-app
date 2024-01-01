import { NgModule } from '@angular/core';
import 'devextreme-intl';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { SharedModule } from './shared/config/shared.module';
import { DxResponsiveBoxModule } from 'devextreme-angular';
import { DxiColModule, DxiItemModule, DxiLocationModule, DxiRowModule } from 'devextreme-angular/ui/nested';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
    SharedModule,
    DxResponsiveBoxModule,
    DxiRowModule, DxiColModule, DxiItemModule, DxiLocationModule],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
