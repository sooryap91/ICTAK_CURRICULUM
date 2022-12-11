import { Component, OnInit, ElementRef } from '@angular/core';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-viewcurriculum',
  templateUrl: './viewcurriculum.component.html',
  styleUrls: ['./viewcurriculum.component.css']
})
export class ViewcurriculumComponent implements OnInit {
  lists: any = []
  currilist: any = []

  constructor(private elementRef: ElementRef, private adminservice: AdminserviceService,
    private actroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getdata()
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
  }

  getdata() {
    this.adminservice.getcurrlist().subscribe(res => {
      this.lists = res
      console.log(res);
    })
  }

 
  onDelete(id: string, form: NgForm) {

    this.adminservice.onDelete(id).subscribe(res => { alert("data deleted") })
    this.getdata()

  }

}
