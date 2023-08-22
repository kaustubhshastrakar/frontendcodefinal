import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  [x: string]: any;
  private apiUrl = 'http://localhost:8088/api'; // Update with your microservice URL

  constructor(private http: HttpClient) {}

  getAllSkills(): Observable<any> {
    return this.http.get(`${this.apiUrl}/skills/all`);
  }

  saveSkills(skillInfo: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/saveSkills`, skillInfo);
  }

  searchSkill(skillCategory: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/searchskill/${skillCategory}`);
  }

  getSkillId(skillCategory: string, skillName: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/getSkillid/${skillCategory}/${skillName}`);
  }

  // Add more methods as needed for other microservice API functions

  // Example method to call your microservice's login endpoint
  login(email: string, password: string): Observable<any> {
    const loginData = { associateEmail: email, password: password };
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }

  // Example method to call your microservice's saveAssociate endpoint
  saveAssociate(associate: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/saveAssociate`, associate);
  }

  // Example method to call your microservice's verifyAssociate endpoint
  verifyAssociate(email: string, password: string): Observable<any> {
    const data = { associateEmail: email, password: password };
    return this.http.post(`${this.apiUrl}/verifyAssociate`, data);
  }

  // Delete skills by their ID
  deleteSkillById(skillId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteSkill/${skillId}`);
  }

  // Add more methods as needed for other microservice API functions

  saveAssociateSkill(associateId: number, skillId: number, data: any) {
    const url = `${this.apiUrl}/saveAssociateSkill/${associateId}/${skillId}`;
    return this.http.post(url, null); // Use null as the request body, as the endpoint may not require it
  }

  getAssociates(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/associates`);
  }

  getSkills(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/skills`);
  }

  getAllAssociateSkills(): Observable<any[]> {
    const url = `${this.apiUrl}/associateSkills/all`;
    return this.http.get<any[]>(url);

  }


}
