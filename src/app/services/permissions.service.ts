import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ASSIGN_ROL, API_GET_MODULES, API_MENU, API_MODULE, API_MODULES, API_USERS_SEARCH } from '../core/constants/url.constants';
import { Menu } from '../core/models/menu.models';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor(private http:HttpClient) { }

  getMenu():Observable<any>{
    return this.http.get(API_MENU)
  }

  getModules():Observable<any>{
   return this.http.get(API_GET_MODULES)
  }


  postModule(data: Menu): Observable<Object> {
    return this.http.post(API_MODULE, data);
  }

  postMenu(data: Menu): Observable<Object> {
    return this.http.post(API_MENU, data);
  }

  getAllModules():Observable<any>{
    return this.http.get(API_MODULES)
  }

  /* USERS */
  searchUsers (filter:string):Observable<Object>{
    return this.http.get(API_USERS_SEARCH + '?filter=' + filter)
  }

  addPermissions(data:any):Observable<Object>{
    return this.http.post(API_ASSIGN_ROL, data)
  }
}
