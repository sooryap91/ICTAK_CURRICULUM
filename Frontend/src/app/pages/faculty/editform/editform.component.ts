import { Component, OnInit, ElementRef } from '@angular/core';
import { FacultyserviceService } from 'src/app/services/facultyservice.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {
  id: any
  responseform: any = {
    namereq: "",
    fileuploadfaculty: "",
    comments: ""
  }
  list: any
  currentFile?: any;

  constructor(private elementRef: ElementRef, private facultyservice: FacultyserviceService,
    private actroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.id = this.actroute.snapshot.params['id'];
    this.facultyservice.getsinglecurr(this.id).subscribe(res => {
      this.responseform = res;
      this.list = res;
         })
  }
  selectFile(event: any): void {
    this.currentFile = event.target.files[0];
  }

  onsubmit() {
    this.facultyservice.facultyedit(this.id,this.responseform.comments,this.currentFile)
      .subscribe(res => {
        alert("Data Updated")

        this.router.navigate(['/faculty/editcurriculum'])
        // console.log(res);

      })
  }
}


