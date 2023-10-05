
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  Donation,
  UniqueConstraintError,
} from './donation';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CRUDService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });


  FoodHeaders = new HttpHeaders({
    'X-RapidAPI-Key': '9d95c08d75mshae57f7f480c131ap1443f3jsn5525ed1bd303',
    'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com',
  });


  
  private url = 'http://localhost:3000/';

  Insert(
    Details: Donation
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'money/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(RollNumber: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}money/Read${RollNumber}`);
  }
  Delete(RollNumber: String): Observable<InsertedSuccess> {
    console.log(`${this.url}money/Delete${RollNumber}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}money/Delete${RollNumber}`
    );
  }
  Update(RollNumber: String, Details: Donation) {
    return this.http.put(`${this.url}money/Update${RollNumber}`, Details, {
      headers: this.headers,
    });
  }



  
}