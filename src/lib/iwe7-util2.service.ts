import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Iwe7Util2Service {

  constructor(
    private http: HttpClient
  ) { }

  wurl(m: string, mdo: string) {
    let url = '.';
    if (isDevMode()) {
      url = 'http://test.meepo.com.cn/web';
    }
    return `${url}/index.php?c=site&a=entry&do=api&m=iwe7_worker&model=${m}&mdo=${mdo}`;
  }

  wget(m: string, mdo: string, params: any) {
    const url = this.wurl(m, mdo);
    return this.http.get(url, { withCredentials: true, params: params });
  }

  wpost(m: string, mdo: string, body: any, params: any = {}) {
    const url = this.wurl(m, mdo);
    return this.http.post(url, body, { withCredentials: true, params: params });
  }

}
