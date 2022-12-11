import { Component, OnInit, ElementRef } from '@angular/core';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-updatecurriculum',
  templateUrl: './updatecurriculum.component.html',
  styleUrls: ['./updatecurriculum.component.css']
})
export class UpdatecurriculumComponent implements OnInit {

  id: any

  curriculum: any = { namereq: '', institution: '', area: '', hours: '', category: '' };

  constructor(private elementRef: ElementRef, private adminservice: AdminserviceService,
    private actroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.id = this.actroute.snapshot.params['id'];
    // console.log(this.id)
    this.adminservice.getdataid(this.id).subscribe(res => {
      this.curriculum = res;
      console.log(res);
    })
  }
  onsubmit() {

    this.adminservice.adminedit(this.curriculum).subscribe(res => {
      alert("Data updated");
      this.router.navigate(['/admin/view']);

    })

  }

}



 


