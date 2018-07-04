import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
export interface Iwe7Response<T> {
  code: string;
  msg: string;
  data: T;
}
@Injectable({
  providedIn: 'root'
})
export class Iwe7Util2Service {
  m: string = 'iwe7_worker';
  constructor(
    private http: HttpClient
  ) { }

  setM(m: string): void {
    this.m = m;
  }

  wurl(m: string, mdo: string): string {
    let url = '.';
    if (isDevMode()) {
      url = 'http://test.meepo.com.cn/web';
    }
    return `${url}/index.php?c=site&a=entry&do=api&m=${this.m}&model=${m}&mdo=${mdo}`;
  }

  wget<T>(m: string, mdo: string, params: any): Observable<Iwe7Response<T>> {
    const url = this.wurl(m, mdo);
    return this.http.get<Iwe7Response<T>>(url, { withCredentials: true, params: params });
  }

  wpost<T>(m: string, mdo: string, body: any, params: any = {}): Observable<Iwe7Response<T>> {
    const url = this.wurl(m, mdo);
    return this.http.post<Iwe7Response<T>>(url, body, { withCredentials: true, params: params });
  }

}
