import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_MENU } from '../core/constants/url.constants';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  activeMenuMobile = new EventEmitter<Boolean>();
  verticalLogo = './assets/images/logos/telefonica.png';


  constructor(private http:HttpClient) { }


  getMenu(): Observable<any> {
    return this.http.get(API_MENU);
  }


  getVerticalLogo() {
    return this.verticalLogo;
  }


  getSessionItem(name: string): { code: boolean; object?: any } {
    try {
      const item = localStorage.getItem(name);
      // const object = JSON.parse(item);

      return { code: false };

      /* if (!!object) {
        return { code: true, object: object };
      } else {
        return { code: false };
      } */
    } catch (error) {
      return { code: false };
    }
  }
}
