import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  Cloth,
  UniqueConstraintError,
} from './cloth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClothService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });


  
  private url = 'http://localhost:5000/';

  Insert(
    Details:Cloth
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'cloth/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(RollNumber: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}cloth/Read${RollNumber}`);
  }
  Delete(RollNumber: String): Observable<InsertedSuccess> {
    console.log(`${this.url}cloth/Delete${RollNumber}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}cloth/Delete${RollNumber}`
    );
  }
  Update(RollNumber: String, Details: Cloth) {
    return this.http.put(`${this.url}cloth/Update${RollNumber}`, Details, {
      headers: this.headers,
    });
  }



 
}