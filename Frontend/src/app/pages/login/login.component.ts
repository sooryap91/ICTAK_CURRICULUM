import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,private auth:AuthService) { }

  ngOnInit(): void {
  }
  userform={
    
    'email' : '',
    'password' : ''

    
  }
  
userverify(){
  
  this.auth.login(this.userform).subscribe(res=>{

    if(res.message){
      alert(res.message)
    }
   else  if (res.email == "admin123@gmail.com" && res.password =="Admin123" ){
      localStorage.setItem('token',res.token)

      alert("Admin has successfully logged in")
      this.route.navigate(['/admin'])

     }
     else{
      localStorage.setItem('token',res.token)

      alert("Faculty has successfully logged in")

      this.route.navigate(['/faculty'])

     }
  })
  
}
}



