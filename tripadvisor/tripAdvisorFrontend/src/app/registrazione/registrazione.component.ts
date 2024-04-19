import { FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent {
  constructor(private service:RestService,private router:Router){}
  formatted!:string ;

  form: FormGroup = new FormGroup({
      nome: new FormControl(''),
      cognome: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      img:new FormControl('')
    })




  onFileChange(event: any) {
    let path = event.target.files[0];
    let reader = new FileReader();
    
    reader.onloadend = () => {
      let base64String = reader.result as string;
      this.formatted = base64String.replace("data:image/jpeg;base64,","");
      console.log(this.formatted);
    };
    reader.readAsDataURL(path);
  }
  
  registrati(){
    console.log(this.form.value);
    this.form.value.img =this.formatted;
    this.service.createUser(this.form.value).subscribe({
      next:(res:any)=>{
        console.log(res)
      }
    })
    this.router.navigate(['/login'])
  }
}
