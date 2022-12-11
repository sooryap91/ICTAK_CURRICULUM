import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  apiUrl:String = 'http://localhost:3500/api'

  constructor(private http:HttpClient) { }
  addreq(data:any){
    return this.http.post<any>(`${this.apiUrl}/requirement`,data)
  }
  getcurrfac(){
    return this.http.get<any>(`${this.apiUrl}/currfac`)

  }
  getreqlist() {
    return this.http.get<any>(`${this.apiUrl}/reqlist`)
  }
  getcurrlist() {
    return this.http.get<any>(`${this.apiUrl}/currilist`)
  }
  getreq(id: any) {
    return this.http.get<any>(`${this.apiUrl}/req/${id}`)

  }
  statuschange(data: any) {
    return this.http.put<any>(`${this.apiUrl}/curriculumstatus`, data)
  }
  getdash() {
    return this.http.get<any>(`${this.apiUrl}/dashlists`)
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
   onDelete(id: any){  
    return this.http.delete<any>(`${this.apiUrl}/list/${id}`)

  } 
  getdataid(id:any){
    return this.http.get<any>(`${this.apiUrl}/getdataid/${id}`)
  }
  adminedit(data: any) {
    return this.http.put<any>(`${this.apiUrl}/adminedit`, data)
  }
}

