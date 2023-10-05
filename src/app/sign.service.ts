import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  Sign,
  UniqueConstraintError,
} from './donation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });

  
  private url = 'http://localhost:9000/';

  Insert(
    Details: Sign
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'sign/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(email: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}sign/Read${email}`);
  }
  Delete(email: String): Observable<InsertedSuccess> {
    console.log(`${this.url}sign/Delete${email}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}sign/Delete${email}`
    );
  }
  Update(email: String, Details: Sign) {
    return this.http.put(`${this.url}sign/Update${email}`, Details, {
      headers: this.headers,
    });
  }
  
}