import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

type Colors =
  | 'warning'
  | 'danger'
  | 'success'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'dark';

type Positions = 'top' | 'bottom' | 'middle';

@Injectable({
  providedIn: 'root',
})

export class BaseService {

  constructor(
    private http: HttpClient,
    // private platform: Platform,
    // private device: Device,
    // private alertCtrl: AlertController,
  ) {
    // devextremeAjax.inject({ sendRequest: sendRequestFactory(http) };
  }

  // loading_Show(status: boolean = false) {
  //   return status;
  // }

  // loading_Show(status: boolean = false) {
  //   return status;
  // }

  // loading_Show(status: boolean) {
  //   setTimeout(() => {
  //   }, 3000);
  //   return status;
  // }

  // async toast(
  //   message: string,
  //   color: Colors = 'warning',
  //   buttonText: string = '',
  //   duration: number = 2000,
  //   position: Positions = 'top'
  // ) {
  //   let toast = await this.toastCtrl.create({
  //     message: message,
  //     duration: duration,
  //     position: position,
  //     color: color,
  //     buttons: buttonText
  //       ? [{ text: buttonText, role: 'cancel', side: 'start' }]
  //       : undefined,
  //   });
  //   toast.present();
  // }

  private getHttpHeader() {
    return {
      // 'Content-Type': 'application/json',
      'accept': 'text/plain',
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      // 'Access-Control-Allow-Headers': 'Content-Type',
    };
  }

  httpGET(serviceUrl: string, body: any = null, showLoadingPopup: boolean = false, apiRootUrl: string = environment.apiUrl) {
    return new Promise(async (resolve, reject) => {
      let loading: any; if (showLoadingPopup) {
        this.loading_dialog = true;
      }
      if (body) {
        let dataParams = new HttpParams().set('serviceData', JSON.stringify(body));
        this.http.get(apiRootUrl + serviceUrl, { headers: this.getHttpHeader(), params: dataParams, }).subscribe((res: any) => {
          if (showLoadingPopup && loading) {
            this.loading_dialog = false;
          } resolve(res.Result);
        }, (err) => {
          if (showLoadingPopup && loading) {
            this.loading_dialog = false;
          } reject(err);
        });
      }
      else {
        this.http.get(apiRootUrl + serviceUrl, { headers: this.getHttpHeader(), }).subscribe((res: any) => {
          if (showLoadingPopup && loading) {
            this.loading_dialog = false;
          } resolve(res);
        }, (err) => {
          if (showLoadingPopup && loading) {
            this.loading_dialog = false;
          } reject(err);
        });
      }
    });
  }

  httpPOST(serviceUrl: string, body: any, showLoadingPopup: boolean = false) {
    return new Promise(async (resolve, reject) => {
      let loading: any;
      if (showLoadingPopup) {
        this.loading_dialog = true;
      }
      this.http
        .post(
          environment.apiUrl + serviceUrl,
          body,
          { headers: this.getHttpHeader() }
        )
        .subscribe(
          (res: any) => {
            if (showLoadingPopup && loading) {
              this.loading_dialog = false;
            }
            resolve(res);
          },
          (err) => {
            if (showLoadingPopup && loading) {
              this.loading_dialog = false;
            }
            reject(err);
          }
        );
    });
  }

  httpPUT(serviceUrl: string, body: any, showLoadingPopup: boolean = false) {
    return new Promise(async (resolve, reject) => {
      let loading: any;
      if (showLoadingPopup) {
        this.loading_dialog = true;
      }
      this.http
        .put(
          environment.apiUrl + serviceUrl,
          body ? JSON.stringify(body) : {},
          { headers: this.getHttpHeader() }
        )
        .subscribe(
          (res: any) => {
            if (showLoadingPopup && loading) {
              this.loading_dialog = false;
            }
            resolve(res.Result);
          },
          (err) => {
            if (showLoadingPopup && loading) {
              this.loading_dialog = false;
            }
            reject(err);
          }
        );
    });
  }

  httpDELETE(serviceUrl: string, showLoadingPopup: boolean = false) {
    return new Promise(async (resolve, reject) => {
      let loading: any;
      if (showLoadingPopup) {
        this.loading_dialog = true;
      }
      this.http
        .delete(environment.apiUrl + serviceUrl, {
          headers: this.getHttpHeader(),
        })
        .subscribe(
          (res: any) => {
            if (showLoadingPopup && loading) {
              this.loading_dialog = false;
            }
            resolve(res.Result);
          },
          (err) => {
            if (showLoadingPopup && loading) {
              this.loading_dialog = false;
            }
            reject(err);
          }
        );
    });
  }

  stringToBinary = (str: string) => {
    let binary = '';
    for (let i = 0; i < str.length; i++) {
      const charBinary = str.charCodeAt(i).toString(2);
      // Pad with leading zeros to ensure 8-bit representation
      binary += charBinary.padStart(8, '0');
    }
    return binary;
  };

  public get loading_dialog() {
    return this.loading_dialog;
  }

  public set loading_dialog(v: boolean) {
    if (v == true) {
      const el = document.getElementById('loadPanel');
      // el.id = 'loading-box';
      //       el.innerHTML = `
      //         <div class="loading" id="loading">
      //           <h3>Loading...</h3>
      //           <dx-button
      //     icon="undo">
      // </dx-button>
      //         </div>
      //       `;
      el?.setAttribute("visible", "true");
      // document.getElementsByTagName('body')[0].appendChild(el);
    } else {
      // const loadingElement = document.getElementById('loading');
      const el = document.getElementById('loadPanel');
      if (el) {
        // el.style.transform = 'scale(0)';
        setTimeout(() => {
          document.getElementById('loadPanel')?.setAttribute("visible", "true");
        }, 400);
      }
    }
  }
}
