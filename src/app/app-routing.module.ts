import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DxButtonModule, DxCalendarModule, DxChartModule, DxCheckBoxModule, DxDataGridModule, DxDateBoxModule, DxDropDownBoxModule, DxFileUploaderModule, DxFormModule, DxListModule, DxNumberBoxModule, DxPopupModule, DxRadioGroupModule, DxResponsiveBoxModule, DxScrollViewModule, DxSelectBoxModule, DxTabPanelModule, DxTabsModule, DxTextAreaModule, DxTextBoxModule, DxTooltipModule, DxValidatorModule } from 'devextreme-angular';
import { DxiColModule, DxiItemModule, DxiLocationModule, DxiRowModule } from 'devextreme-angular/ui/nested';
import { AccountComponent } from './pages/private/account/account.component';
import { CustomersComponent } from './pages/private/basic/customers/customers.component';
import { DepartmentsCodingComponent } from './pages/private/basic/departments-coding/departments-coding.component';
import { ProductionActivitiesComponent } from './pages/private/basic/production-activities/production-activities.component';
import { ProductsCodingComponent } from './pages/private/basic/products-coding/products-coding.component';
import { SettingComponent } from './pages/private/setting/setting.component';
import { WorkShiftsComponent } from './pages/private/basic/work-shifts/work-shifts.component';
import { DesignComponent } from './pages/private/design/design.component';
import { ProfileComponent } from './pages/private/profile/profile.component';
import { TasksComponent } from './pages/private/tasks/tasks.component';
import { HomeComponent } from './pages/public/home/home.component';
import { ChangePasswordFormComponent, CreateAccountFormComponent, LoginFormComponent, ResetPasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { FilmComponent } from './pages/private/product/film/film.component';
import { PrintComponent } from './pages/private/product/print/print.component';
import { EmployeesListComponent } from './pages/private/basic/employees/employees-list/employees-list.component';
import { EmployeesTimesheetComponent } from './pages/private/basic/employees/employees-timesheet/employees-timesheet.component';
import { EmployeesCalendarComponent } from './pages/private/basic/employees/employees-calendar/employees-calendar.component';
import { OrderPrintComponent } from './pages/private/order/order-print/order-print.component';
import { OrderFilmComponent } from './pages/private/order/order-film/order-film.component';

const routes: Routes = [
  {
    path: 'pages/order-film',
    component: OrderFilmComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/order-print',
    component: OrderPrintComponent,
    canActivate: [ AuthGuardService ]
  },
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
    path: 'basic/work-shifts',
    component: WorkShiftsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'basic/production-activities',
    component: ProductionActivitiesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'basic/departments-coding',
    component: DepartmentsCodingComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'basic/products-coding',
    component: ProductsCodingComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'basic/employees/employees-calendar',
    component: EmployeesCalendarComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'basic/employees/employees-timesheet',
    component: EmployeesTimesheetComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'basic/employees/employees-list',
    component: EmployeesListComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'basic/customers',
    component: CustomersComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'product/print',
    component: PrintComponent,
    canActivate: [AuthGuardService],
    data: { formType: 'list' }
  },
  {
    path: 'product/print/new',
    component: PrintComponent,
    canActivate: [AuthGuardService],
    data: { formType: 'new' }
  },
  {
    path: 'product/film',
    component: FilmComponent,
    canActivate: [AuthGuardService],
    data: { formType: 'list' }
  },
  {
    path: 'product/film/new',
    component: FilmComponent,
    canActivate: [AuthGuardService],
    data: { formType: 'new' }
  },
  {
    path: 'order/print',
    component: OrderPrintComponent,
    canActivate: [AuthGuardService],
    data: { formType: 'list' }
  },
  {
    path: 'order/print/new',
    component: OrderPrintComponent,
    canActivate: [AuthGuardService],
    data: { formType: 'new' }
  },
  {
    path: 'order/film',
    component: OrderFilmComponent,
    canActivate: [AuthGuardService],
    data: { formType: 'list' }
  },
  {
    path: 'order/film/new',
    component: OrderFilmComponent,
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
    path: 'setting',
    component: SettingComponent,
    canActivate: [AuthGuardService]
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
    SettingComponent,
    DesignComponent,
    TasksComponent,
    CustomersComponent,
    ProductsCodingComponent,
    DepartmentsCodingComponent,
    ProductionActivitiesComponent,
    WorkShiftsComponent,
    FilmComponent,
    PrintComponent,
    EmployeesListComponent,
    EmployeesTimesheetComponent,
    EmployeesCalendarComponent,
    OrderPrintComponent,
    OrderFilmComponent,
  ]
})
export class AppRoutingModule { }
