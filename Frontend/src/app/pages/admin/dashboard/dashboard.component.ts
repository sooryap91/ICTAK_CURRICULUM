import { Component, OnInit, ElementRef } from '@angular/core';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  approvedcount: any
  notapprovedcount: any
  responsependingcount: any
  dashlist: any = []

constructor(private elementRef: ElementRef, private admin: AdminserviceService, private router: Router) { this.getapprove() }
ngOnInit(): void {
 this.getapprove()
 this.admin.currapprovedcount().subscribe(res => {
      this.approvedcount = res;
    })
    this.admin.currnotapprovedcount().subscribe(res => {
      this.notapprovedcount = res;
    })
    this.admin.reqpendingcount().subscribe(res => {
      this.responsependingcount = res;
    })
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);

  }


  //approved in admin dashboard
  getapprove() {
    this.admin.getdash().subscribe(res => {
      this.dashlist = res;
      this.getapprove();
    })
  }

}
