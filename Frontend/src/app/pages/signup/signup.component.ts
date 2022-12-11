import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform =  {
    'name' : '',
    'email' : '',
    'password' : '',
    'place':'',
    'phonenumber':''


    
  }

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
 
  }
  onsubmit(){
    console.log(this.signupform)
    this.auth.signup(this.signupform).subscribe(res=>{
      if(res.message){
        alert(res.message)
        this.router.navigate(['/signup'])


      }else{
        alert("registered successfully");
        this.router.navigate(['/login'])
      }
    })
  }

}