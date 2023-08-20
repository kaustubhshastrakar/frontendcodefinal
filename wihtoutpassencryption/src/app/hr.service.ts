import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrService {
  private baseUrl = 'http://localhost:8277/api'; // Adjust with your backend URL

  constructor(private http: HttpClient) { }

  getAllHR(): Observable<any> {
    return this.http.get(`${this.baseUrl}/hrDetails/all`);
  }

  getHRById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/HR/${id}`);
  }

  createHR(hr: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create-hr`, hr);
  }

  updateHR(hr: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/updateHR`, hr);
  }

  deleteHR(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/hrdelete/${id}`);
  }
}
