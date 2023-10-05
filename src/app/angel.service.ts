import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  Angel,
  UniqueConstraintError,
} from './angel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AngelService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });  
  private url = 'http://localhost:7000/';

  Insert(
    Details: Angel
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'angel/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(RollNumber: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}angel/Read${RollNumber}`);
  }
  Delete(RollNumber: String): Observable<InsertedSuccess> {
    console.log(`${this.url}angel/Delete${RollNumber}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}angel/Delete${RollNumber}`
    );
  }
  Update(RollNumber: String, Details: Angel) {
    return this.http.put(`${this.url}angel/Update${RollNumber}`, Details, {
      headers: this.headers,
    });
  }



  
}

   


  