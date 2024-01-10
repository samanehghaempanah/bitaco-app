import { Component, HostBinding } from '@angular/core';
import config from 'devextreme/core/config';
import { locale } from 'devextreme/localization';
import { BaseService } from './services/base.service';
import { AppInfoService, AuthService, ScreenService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(private authService: AuthService,public baseService: BaseService , private screen: ScreenService, public appInfo: AppInfoService) { 
    config({ rtlEnabled: true });
    locale("fa-IR");
  }

  isAuthenticated() {
    return this.authService.loggedIn;
  }
}

