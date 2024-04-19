import { Component } from '@angular/core';
import { RestService } from '../services/rest.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private service:RestService,private router:Router){}
  
  user:any;
  form:FormGroup=new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  login(){
    this.service.login(this.form.value.email,this.form.value.password).subscribe({
      next:(res:any)=>{
        this.user=res;
        if(this.user==null){
          alert("Credenziali errate");
        }else
        {
         localStorage.setItem("user",JSON.stringify(this.user));
         
         this.router.navigate(['/']).then(()=>{
           location.reload();
         })
         
        }   
        
      }
       
    });
   
  }
}

