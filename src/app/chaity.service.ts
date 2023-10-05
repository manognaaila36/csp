import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  CharityDetails,
  UniqueConstraintError,
} from './charity-details';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})


export class ChaityService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });

  
  private url = 'http://localhost:8000/';

  Insert(
    Details: CharityDetails
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'charity/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(s_no: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}charity/Read${s_no}`);
  }
  Delete(s_no: String): Observable<InsertedSuccess> {
    console.log(`${this.url}charity/Delete${s_no}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}charity/Delete${s_no}`
    );
  }
  Update(s_no: String, Details: CharityDetails) {
    return this.http.put(`${this.url}charity/Update${s_no}`, Details, {
      headers: this.headers,
    });
  }
  
}

  