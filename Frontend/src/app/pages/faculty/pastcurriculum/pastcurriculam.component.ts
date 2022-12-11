import { Component, OnInit } from '@angular/core';
import { FacultyserviceService } from 'src/app/services/facultyservice.service';

@Component({
  selector: 'app-pastcurriculam',
  templateUrl: './pastcurriculam.component.html',
  styleUrls: ['./pastcurriculam.component.css']
})
export class PastcurriculamComponent implements OnInit {

  currlists:any=[]
  constructor(private faculty:FacultyserviceService) { }

  ngOnInit(): void {
    this.getdata()
  }
  getdata(){
    this.faculty.getcurrlist().subscribe(res=>{
      this.currlists = res
    console.log(res);
    })
    }

}
