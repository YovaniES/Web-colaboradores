import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const url_ListPasses = 'http://localhost:3000/listPases';

@Injectable({
  providedIn: 'root',
})
export class ListOfPassesService {
  constructor(private http: HttpClient) {}

  getListOfPasses(): Observable<any> {
    return this.http.get(url_ListPasses);
  }
  deleteListPasses(id: number) {
    const url = `${url_ListPasses}/${id}`;
    return this.http.delete(url);
  }
}
