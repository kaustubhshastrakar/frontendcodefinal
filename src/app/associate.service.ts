import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssociateService {
  [x: string]: any;

  private baseUrl = 'http://localhost:8088/api'; // Update with your backend URL

  constructor(private http: HttpClient) { }

  // Define the saveAssociate method
  saveAssociate(associate: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/saveAssociate`, associate);
  }

  // Define the getAllAssociates method
  getAllAssociates(): Observable<any> {
    return this.http.get(`${this.baseUrl}/associate/all`);
  }

  //Define Delete Associates method
  deleteAssociate(id: number): Observable<void> {
    const url = `${this.baseUrl}/deleteAssociate/${id}`;
    return this.http.delete<void>(url);
    }


    getAssociateById(associateId: number): Observable<any> {
      const url = `${this.baseUrl}/associateId/${associateId}`;
      return this.http.get(url);
    }

getAssociatesByLastName(lastName: string): Observable<any[]> {
    const url = `${this.baseUrl}/AssociateLastName/${lastName}`;
    return this.http.get<any[]>(url);
  }


  
}
