import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curriculumfromfaculty',
  templateUrl: './curriculumfromfaculty.component.html',
  styleUrls: ['./curriculumfromfaculty.component.css']
})
export class CurriculumfromfacultyComponent implements OnInit {
lists : any =[]
  constructor(private admin:AdminserviceService,private router:Router) { }

  ngOnInit(): void {
    this.getdata()
  }
getdata(){
  this.admin.getcurrfac().subscribe(res=>{
    this.lists= res;
})

}
approve(id:any){
  let data = { "_id": id, "status": "approved" }
this.admin.statuschange(data).subscribe((res:any)=>{
  alert("curriculum approved")
  this.getdata();

  
})

}
}

