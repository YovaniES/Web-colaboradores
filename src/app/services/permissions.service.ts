import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_GET_MODULES, API_MENU, API_MODULES } from '../core/constants/url.constants';
import { Menu } from '../core/models/menu.models';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor(private http:HttpClient) { }


  getModules():Observable<any>{
   return this.http.get(API_GET_MODULES)
  }


  postModule$(data: Menu): Observable<Object> {
    return this.http.post(API_MODULES, data);
  }

  postMenu$(data: Menu): Observable<Object> {
    return this.http.post(API_MENU, data);
  }

  getAllModules(){
    return this.http.get(API_MODULES)
  }
}
