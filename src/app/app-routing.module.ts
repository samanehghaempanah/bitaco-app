import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/public/home/home.component'
import { ProfileComponent } from './pages/private/profile/profile.component';
import { TasksComponent } from './pages/private/tasks/tasks.component';
import { DxButtonModule, DxCalendarModule, DxChartModule, DxCheckBoxModule, DxDataGridModule, DxDateBoxModule, DxDropDownBoxModule, DxFileUploaderModule, DxFormModule, DxListModule, DxNumberBoxModule, DxPopupModule, DxRadioGroupModule, DxResponsiveBoxModule, DxScrollViewModule, DxSelectBoxModule, DxTabPanelModule, DxTabsModule, DxTextAreaModule, DxTextBoxComponent, DxTextBoxModule, DxTooltipModule, DxValidatorModule } from 'devextreme-angular';
import { OrderComponent } from './pages/private/order/order.component';
import { DxiColModule, DxiItemModule, DxiLocationModule, DxiRowModule } from 'devextreme-angular/ui/nested';
import { AccountComponent } from './pages/private/account/account.component';
import { ProductComponent } from './pages/private/product/product.component';
import { DesignComponent } from './pages/private/design/design.component';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { BasicComponent } from './pages/private/basic/basic.component';
import { HrComponent } from './pages/private/basic/hr/hr.component';
import { LogisticComponent } from './pages/private/basic/logistic/logistic.component';
import { ProductionComponent } from './pages/private/basic/production/production.component';
import { FinancialComponent } from './pages/private/basic/financial/financial.component';
import { SettingComponent } from './pages/private/basic/setting/setting.component';
import { EngineeringComponent } from './pages/private/basic/engineering/engineering.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'basic/hr',
    component: HrComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'basic/hr/customers',
    component: HrComponent,
    canActivate: [AuthGuardService],
    data: { formType: 'customers' }
  },
  {
    path: 'basic/hr/employees',
    component: HrComponent,
    canActivate: [AuthGuardService],
    data: { formType: 'employees' }
  },
  {
    path: 'basic/hr/employees/list',
    component: HrComponent,
    canActivate: [AuthGuardService],
    data: { formType: 'list' }
  },
  {
    path: 'basic/hr/employees/calendar',
    component: HrComponent,
    canActivate: [AuthGuardService],
    data: { formType: 'calendar' }
  },
  {
    path: 'basic/logistic',
    component: LogisticComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'basic/engineering',
    component: EngineeringComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'basic/production',
    component: ProductionComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'basic/financial',
    component: FinancialComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'basic/setting',
    component: SettingComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'product',
    component: ProductComponent,
    canActivate: [AuthGuardService],
    data: { formType: 'list' }
  },
  {
    path: 'product/new',
    component: ProductComponent,
    canActivate: [AuthGuardService],
    data: { formType: 'new' }
  },
  {
    path: 'order',
    component: OrderComponent,
    canActivate: [AuthGuardService],
    data: { formType: 'list' }
  },
  {
    path: 'order/new',
    component: OrderComponent,
    canActivate: [AuthGuardService],
    data: { formType: 'new' }
  },
  {
    path: 'design',
    component: DesignComponent,
    canActivate: [AuthGuardService],
    data: { formType: 'list' }
  },
  {
    path: 'design/new',
    component: DesignComponent,
    canActivate: [AuthGuardService],
    data: { formType: 'new' }
  },
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }),
    CommonModule, DxDataGridModule, DxFormModule, DxDateBoxModule,
    DxCalendarModule, DxRadioGroupModule, DxCheckBoxModule, DxNumberBoxModule,
    DxButtonModule, DxResponsiveBoxModule, DxiRowModule, DxiColModule,
    DxiItemModule, DxiLocationModule, DxChartModule, DxSelectBoxModule,
    DxTextBoxModule, DxFileUploaderModule, DxListModule, DxDropDownBoxModule,
    DxTextAreaModule, DxTooltipModule, ClipboardModule, DxTabsModule, DxTabPanelModule,
    DxValidatorModule, DxPopupModule, DxScrollViewModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    AccountComponent,
    BasicComponent,
    HrComponent,
    LogisticComponent,
    EngineeringComponent,
    ProductionComponent,
    FinancialComponent,
    SettingComponent,
    ProductComponent,
    OrderComponent,
    DesignComponent,
    TasksComponent,
  ]
})
export class AppRoutingModule { }
