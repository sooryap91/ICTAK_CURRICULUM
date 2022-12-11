import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/services/adminservice.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
 
  approvedcount: any
  responsependingcount: any
  dashlist: any = []
  constructor(@Inject(DOCUMENT) private document: Document,private elementRef: ElementRef, private admin: AdminserviceService, private router: Router) { }
  
  ngOnInit(): void {
    this.getapprove()
 this.admin.currapprovedcount().subscribe(res => {
      this.approvedcount = res;
    })
    
    this.admin.reqpendingcount().subscribe(res => {
      this.responsependingcount = res;
    })
  }
  sidebarToggle()
  {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }
  //logout token clear
  logout(){
    localStorage.clear();
  }
  scrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

  }
  getapprove() {
    this.admin.getdash().subscribe(res => {
      this.dashlist = res;
      this.getapprove();
    })
  }
}
