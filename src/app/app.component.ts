import { Component, HostBinding } from '@angular/core';
import config from 'devextreme/core/config';
import { locale } from 'devextreme/localization';
import { BaseService } from './services/base.service';
import { AppInfoService, ScreenService } from './shared/services';
import { AuthenticateService } from './services/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(private authenticateService: AuthenticateService,public baseService: BaseService , private screen: ScreenService, public appInfo: AppInfoService) { 
    config({ rtlEnabled: true });
    locale("fa-IR");
  }

  isAuthenticated() {
    return this.authenticateService.loggedIn;
  }
}

