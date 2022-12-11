import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FacultyserviceService {
  apiUrl: String = 'http://localhost:3500/api'

  constructor(private http: HttpClient) { }
  getreqlist() {
    return this.http.get<any>(`${this.apiUrl}/reqlist`)
  }
  getreq(id: any) {
    return this.http.get<any>(`${this.apiUrl}/req/${id}`)

  }
  
  addcur(namereq:string,institution:string,area:string,category:string,hours:string,comments:string, file:File) {
    const profileData = new FormData();
    profileData.append("namereq", namereq);
    profileData.append("institution", institution);
    profileData.append("area", area);
    profileData.append("category", category);
    profileData.append("hours", hours);
    profileData.append("comments", comments);
    profileData.append("file", file);
    return this.http.post<any>(`${this.apiUrl}/curriculum`, profileData)

  }
  statuschange(data: any) {
    return this.http.put<any>(`${this.apiUrl}/statusupdate`, data)
  }
  getcurrlist() {
    return this.http.get<any>(`${this.apiUrl}/currilist`)
  }
   currapprovedcount() {
    return this.http.get<any>(`${this.apiUrl}/currapprovedcount`)
  }
  currnotapprovedcount() {
    return this.http.get<any>(`${this.apiUrl}/currnotapprovedcount`)
  }
  reqpendingcount() {
    return this.http.get<any>(`${this.apiUrl}/reqpendingcount`)
  }
  approvedcurrlist() {
    return this.http.get<any>(`${this.apiUrl}/approvedcurrilist`)
  }
  singlecurr(id:any){
    return this.http.get<any>(`${this.apiUrl}/singlecurr/${id}`)
  }
  //amal
  
  getncurrlist() {
    return this.http.get<any>(`${this.apiUrl}/ncurrlist`)
  }
  
   facultyedit(id:string,comments:string, file:File) {
    const profileData = new FormData();
    profileData.append("comments", comments);
    profileData.append("file", file);
    profileData.append("id", id);
    return this.http.put<any>(`${this.apiUrl}/faculedit`, profileData)
  }
  
  getsinglecurr(id:any){
    
    return this.http.get<any>(`${this.apiUrl}/singlecurriculam/${id}`)
  }
  //amal
  
  
}
