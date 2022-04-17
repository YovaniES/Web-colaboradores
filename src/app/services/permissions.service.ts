import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_GET_MODULES, API_MENU, API_MODULE } from '../core/constants/url.constants';
import { Menu } from '../core/models/menu.models';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor(private http:HttpClient) { }




  httpGetModules():Observable<any>{
   return this.http.get(API_GET_MODULES)
  }


  httpPostModule$(data: Menu): Observable<Object> {
    return this.http.post(API_MODULE, data);
  }

  httpPostMenu$(data: Menu): Observable<Object> {
    return this.http.post(API_MENU, data);
  }
}
