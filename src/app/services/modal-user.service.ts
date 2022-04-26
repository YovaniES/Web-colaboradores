import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_USERS } from '../core/constants/url.constants';
import { UsuarioDTO } from '../core/models';

@Injectable({
  providedIn: 'root'
})
export class ModalUserService {

  constructor(private http: HttpClient) { }


  crearUsuario(data:any){
    return this.http.post<any>(API_USERS, data)
  }

  obtenerUsuario():Observable<any>{
    return this.http.get<any>(API_USERS)
  }

  updateUsers(data:any, id:number){
    return this.http.put(API_USERS +'/'+ id, data)
  }

  deleteUsers(id: number){
    const url = `${API_USERS}/${id}`
    return this.http.delete<any>(url)
  }


}
