import { Component, OnInit, ElementRef } from '@angular/core';
import { FacultyserviceService } from 'src/app/services/facultyservice.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-responseform',
  templateUrl: './responseform.component.html',
  styleUrls: ['./responseform.component.css']
})
export class ResponseformComponent implements OnInit {

  id: any
  responseform: any = {
    namereq: "",
    institution: "",
    area: "",
    category: "",
    hours: "",
    comments: "",
    fileupload: ""
  }
    currentFile?: any;



  constructor(private elementRef: ElementRef, private facultyservice: FacultyserviceService,
    private actroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);

    this.id = this.actroute.snapshot.params['id'];
    this.facultyservice.getreq(this.id).subscribe(res => {
      this.responseform.namereq = res.namereq;
      this.responseform.institution = res.institution;
      this.responseform.area = res.area;
      this.responseform.category = res.category;
      this.responseform.hours = res.hours;
    })
  }
 selectFile(event: any): void {
    this.currentFile = event.target.files[0];
  }
  //addcur
  onsubmit() {
    
    this.facultyservice.addcur(this.responseform.namereq,this.responseform.institution,this.responseform.area,this.responseform.category,this.responseform.hours, this.responseform.comments,this.currentFile)
      .subscribe({
        complete: () => {
          // alert("Data saved");
        }
      })

    console.log(this.id)
    let stdata = { "_id": this.id, "status": "respond" }
    this.facultyservice.statuschange(stdata).subscribe((res: any) => {

      this.router.navigate(['/faculty/requirementformfaculty']);


    })
   

    
  }




}
