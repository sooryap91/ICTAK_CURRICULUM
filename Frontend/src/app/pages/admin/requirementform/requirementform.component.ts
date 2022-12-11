import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-requirementform',
  templateUrl: './requirementform.component.html',
  styleUrls: ['./requirementform.component.css']
})
export class RequirementformComponent implements OnInit {
  reqform:any=new FormGroup({
    'namereq' : new FormControl('',[Validators.required]),
    'institution' : new FormControl('',[Validators.required]),
    'area' : new FormControl('',[Validators.required]),
      'category' : new FormControl('',[Validators.required]),
      'hours' : new FormControl('',Validators.required),
      'fileupload' : new FormControl('',[Validators.required]),

    })
  loginuser(){
    console.warn(this.reqform.value)
  }
  get namereq(){
return this.reqform.get('namereq')
  }

  get institution(){
    return this.reqform.get('institution')
      }
      get area(){
        return this.reqform.get('area')
          }
          get category(){
            return this.reqform.get('category')
              }
              get hours(){
                return this.reqform.get('hours')
                  }
                  get fileupload(){
                    return this.reqform.get('fileupload')
                      
                  }


  constructor(private adminservice: AdminserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  fileselect(e: any) {
    this.reqform.fileupload = e.target.files[0].name;

  }
  onsubmit() {
    // let data={
    //   "fileupload":this.reqform.fileupload
    // }
    this.adminservice.addreq(this.reqform.value)
      .subscribe({
        complete: () => {
          alert("Data saved");
          this.reqform.reset();

        }
      })
  }
}
