import { Component, OnInit ,ElementRef} from '@angular/core';
import { FacultyserviceService } from 'src/app/services/facultyservice.service';

@Component({
  selector: 'app-editcurriculum',
  templateUrl: './editcurriculum.component.html',
  styleUrls: ['./editcurriculum.component.css']
})
export class EditcurriculumComponent implements OnInit {
  ncurrlist:any=[]


  constructor(private faculty:FacultyserviceService) { }

  ngOnInit(): void {
    this.getdata()
  }
  getdata(){
    this.faculty.getncurrlist().subscribe(res=>{
      this.ncurrlist = res
    console.log(res);
    })
    }
  }


