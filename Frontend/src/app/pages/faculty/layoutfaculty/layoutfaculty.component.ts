import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { FacultyserviceService } from 'src/app/services/facultyservice.service';

@Component({
  selector: 'app-layoutfaculty',
  templateUrl: './layoutfaculty.component.html',
  styleUrls: ['./layoutfaculty.component.css']
})
export class LayoutfacultyComponent implements OnInit {
  approvedcount: any
  notapprovedcount: any
  responsependingcount: any
  constructor(@Inject(DOCUMENT) private document: Document, private faculty: FacultyserviceService) { }

  ngOnInit(): void {
    this.faculty.currapprovedcount().subscribe(res => {
      this.approvedcount = res;
    })
    this.faculty.currnotapprovedcount().subscribe(res => {
      this.notapprovedcount = res;
    })
    this.faculty.reqpendingcount().subscribe(res => {
      this.responsependingcount = res;
    })
  }
  sidebarToggle()
  {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }
  //claer token
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
}
