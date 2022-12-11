import { Component, OnInit , ViewChild,ElementRef } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FacultyserviceService } from 'src/app/services/facultyservice.service';

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @ViewChild('htmlData') htmlData!: ElementRef;
  
  id: any;
  curriculum: any;
  constructor(private route: ActivatedRoute, private facultyservice: FacultyserviceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.facultyservice.singlecurr(this.id).subscribe(res => {
      this.curriculum = res;
   
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
      PDF.save('curriculum.pdf');
    });
  }


}