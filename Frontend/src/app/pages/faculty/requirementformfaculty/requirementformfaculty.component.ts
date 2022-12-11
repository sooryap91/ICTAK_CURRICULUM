import { Component, OnInit, ElementRef } from '@angular/core';
import { FacultyserviceService } from 'src/app/services/facultyservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-requirementformfaculty',
  templateUrl: './requirementformfaculty.component.html',
  styleUrls: ['./requirementformfaculty.component.css']
})
export class RequirementformfacultyComponent implements OnInit {
  lists: any = []

  constructor(private elementRef: ElementRef, private faculty: FacultyserviceService, private route: Router) { }

  ngOnInit(): void {

    this.getdata()
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    // this.elementRef.nativeElement.appendChild(s);
  }

  getdata() {
    this.faculty.getreqlist().subscribe(res => {
      this.lists = res
      console.log(res);
    })
  }
  onsubmit() {

  }

}
