import { Component, OnInit, ElementRef , ViewChild} from '@angular/core';
import { FacultyserviceService } from 'src/app/services/facultyservice.service';

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-facultydashboard',
  templateUrl: './facultydashboard.component.html',
  styleUrls: ['./facultydashboard.component.css']
})
export class FacultydashboardComponent implements OnInit {
  
   @ViewChild('htmlData') htmlData!: ElementRef;

  approvedcount: any
  notapprovedcount: any
  responsependingcount: any
  currlists:any=[]

  constructor(private elementRef: ElementRef, private faculty: FacultyserviceService) { }

  ngOnInit(): void {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
    
   this.getdata();

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
  getdata() {
    this.faculty.approvedcurrlist().subscribe(res => {
      this.currlists = res;

    })
  }

   openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('curriculam.pdf');
    });
  }

}
