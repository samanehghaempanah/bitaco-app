import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import notify from 'devextreme/ui/notify';

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

  public notify(message: string, type: string) {
    notify({ message: message, type: type, width: 500, displayTime: 1000, shading: true }, { position: "top center", direction: "down-stack" });
  }

  public get loading() {
    return this.loading;
  }

  public set loading(status: boolean) {
    if (status === true && !document.getElementById('loading-box')) {
      const el = document.createElement('div');
      el.id = 'loading-box';
      el.innerHTML = `
      <div class="bg-loader"> 
        <div class="custom-loader"></div>
      </div>
      `;
      document.getElementsByTagName('body')[0].appendChild(el);
    } else {
      const loadingElement = document.getElementById('loading-box');
      if (loadingElement) {
        setTimeout(() => {
          document.getElementById('loading-box')?.remove();
        }, 600);
      }
    }
  }

  private getHttpHeader() {
    return {
      // 'Content-Type': 'application/json',
      'accept': 'text/plain',
      // 'Cookie' : ,
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      // 'Access-Control-Allow-Headers': 'Content-Type',
    };
  }

  httpGET(serviceUrl: string, body: any = null, showLoading: boolean = false, apiRootUrl: string = environment.apiUrl) {
    return new Promise(async (resolve, reject) => {
      let loading: any; if (showLoading) {
        this.loading = true;
      }
      if (body) {
        let dataParams = new HttpParams().set('serviceData', JSON.stringify(body));
        this.http.get(apiRootUrl + serviceUrl, { headers: this.getHttpHeader(), params: dataParams, }).subscribe((res: any) => {
          if (showLoading && loading) {
            this.loading = false;
          } resolve(res.Result);
        }, (err) => {
          if (showLoading && loading) {
            this.loading = false;
          } reject(err);
        });
      }
      else {
        this.http.get(apiRootUrl + serviceUrl, { headers: this.getHttpHeader(), }).subscribe((res: any) => {
          if (showLoading && loading) {
            this.loading = false;
          } resolve(res);
        }, (err) => {
          if (showLoading && loading) {
            this.loading = false;
          } reject(err);
        });
      }
    });
  }

  httpPOST(serviceUrl: string, body: any, showLoading: boolean = false) {
    return new Promise(async (resolve, reject) => {
      let loading: any;
      if (showLoading) {
        this.loading = true;
      }
      this.http
        .post(
          environment.apiUrl + serviceUrl,
          body,
          { headers: this.getHttpHeader() }
        )
        .subscribe(
          (res: any) => {
            if (showLoading && loading) {
              this.loading = false;
            }
            resolve(res);
          },
          (err) => {
            if (showLoading && loading) {
              this.loading = false;
            }
            reject(err);
          }
        );
    });
  }

  httpPUT(serviceUrl: string, body: any, showLoading: boolean = false) {
    return new Promise(async (resolve, reject) => {
      let loading: any;
      if (showLoading) {
        this.loading = true;
      }
      this.http
        .put(
          environment.apiUrl + serviceUrl,
          body ? JSON.stringify(body) : {},
          { headers: this.getHttpHeader() }
        )
        .subscribe(
          (res: any) => {
            if (showLoading && loading) {
              this.loading = false;
            }
            resolve(res.Result);
          },
          (err) => {
            if (showLoading && loading) {
              this.loading = false;
            }
            reject(err);
          }
        );
    });
  }

  httpDELETE(serviceUrl: string, showLoading: boolean = false) {
    return new Promise(async (resolve, reject) => {
      let loading: any;
      if (showLoading) {
        this.loading = true;
      }
      this.http
        .delete(environment.apiUrl + serviceUrl, {
          headers: this.getHttpHeader(),
        })
        .subscribe(
          (res: any) => {
            if (showLoading && loading) {
              this.loading = false;
            }
            resolve(res.Result);
          },
          (err) => {
            if (showLoading && loading) {
              this.loading = false;
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
}
