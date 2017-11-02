import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams} from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
// import { HttpHelper } from './http.helper';

@Injectable()
export class HttpService {

  // constructor(private http: Http,
  //             private router: Router) {}

  // /**
  //  * 处理http请求
  //  * @param {string} url
  //  * @param data
  //  */
  // handle(url, data?): Observable<number> {
  //   return new Observable<number>((subscriber: Subscriber<number>) => {
  //     if (HttpHelper.noSend) {
  //       setTimeout(function () {
  //         subscriber.next(0);
  //         subscriber.complete();
  //       },10);
  //       return;
  //     }
  //     // handle headers
  //     let headers = new Headers();
  //     headers.append('Token', localStorage.getItem('Token'));
  //     headers.append('UserId', localStorage.getItem('UserId'));
  //     // handle options
  //     let options = {
  //       headers: headers
  //     };
  //     // handle data
  //     data = data || {};
  //     typeof data === 'object' && (data = JSON.stringify(data));
  //     // handle params
  //     let params = new URLSearchParams();
  //     params.append('url', url.path);
  //     params.append('type', url.type);
  //     params.append('data', data);
  //     console.log('send post', url, data);
  //     this.http.post(HttpHelper.wb, params, options)
  //       .map(res => {
  //         try {
  //           return res.json();
  //         } catch (e) {
  //           return {};
  //         }
  //       })
  //       .subscribe(
  //         data => {
  //           if (typeof data === 'string') {
  //             try {
  //               data = JSON.parse(data);
  //             } catch (e) {
  //               data = data;
  //             }
  //           }
  //           if (data.code === 9999) {
  //             this.router.navigate(['/login']);
  //           } else if (data.statusCode) {
  //             // TODO 请求失败
  //             alert('操作失败，' + data.message);
  //           } else {
  //             subscriber.next(data.data);
  //             subscriber.complete();
  //           }
  //         },
  //         error => {
  //           console.log('error -- ', error);
  //           // TODO error
  //           subscriber.error();
  //         }
  //       );
  //   });
  // }

  // /**
  //  * 上传图片
  //  * @param file
  //  */
  // upload(file) {
  //   return new Observable<number>((subscriber: Subscriber<number>) => {
  //     let formData: FormData = new FormData();
  //     formData.append('file', file);
  //     this.http.post(HttpHelper.upload, formData)
  //       .map(res => {
  //         console.log('map -- ', res);
  //         try {
  //           return res.json();
  //         } catch (e) {
  //           return {};
  //         }
  //       })
  //       .subscribe(
  //         data => {
  //           // console.log('data -- ', data);
  //           if (typeof data === 'string') {
  //             try {
  //               data = JSON.parse(data);
  //             } catch (e) {
  //               data = data;
  //             }
  //           }
  //           console.log(data.statusCode, typeof data.statusCode);
  //           if (data.statusCode) {
  //             // TODO 请求失败
  //             alert('操作失败，' + data.message);
  //           } else {
  //             subscriber.next(data.data);
  //           }
  //           subscriber.complete();
  //         },
  //         error => {
  //           console.log('error -- ', error);
  //           // TODO error
  //           subscriber.error();
  //         }
  //       );
  //   });
  // }
}
