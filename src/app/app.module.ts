import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxLoadPanelModule, DxResponsiveBoxModule } from 'devextreme-angular';
import { DxiColModule, DxiItemModule, DxiLocationModule, DxiRowModule } from 'devextreme-angular/ui/nested';
import 'devextreme-intl';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavInnerToolbarModule, SideNavOuterToolbarModule, SingleCardModule } from './layouts';
import { ChangePasswordFormModule, CreateAccountFormModule, FooterModule, LoginFormModule, ResetPasswordFormModule } from './shared/components';
import { SharedModule } from './shared/config/shared.module';
import { AppInfoService, ScreenService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AuthenticateService } from './services/authenticate.service';

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
    DxiRowModule, 
    DxiColModule, 
    DxiItemModule, 
    DxiLocationModule, 
    HttpClientModule, 
    DxLoadPanelModule],
  providers: [
    AuthenticateService,
    ScreenService,
    AppInfoService,
    HttpClientModule, 
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
