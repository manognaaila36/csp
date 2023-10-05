

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  Food,
  UniqueConstraintError,
} from './donation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FcrudService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });

  
  private url = 'http://localhost:3800/';

  Insert(
    Details: Food
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'food/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(s_no: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}food/Read${s_no}`);
  }
  Delete(s_no: String): Observable<InsertedSuccess> {
    console.log(`${this.url}food/Delete${s_no}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}food/Delete${s_no}`
    );
  }
  Update(s_no: String, Details: Food) {
    return this.http.put(`${this.url}food/Update${s_no}`, Details, {
      headers: this.headers,
    });
  }
  
}