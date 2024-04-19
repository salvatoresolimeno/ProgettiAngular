import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { RestService } from '../services/rest.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-aggiungi',
  templateUrl: './aggiungi.component.html',
  styleUrls: ['./aggiungi.component.css']
})
export class AggiungiComponent {
  
  constructor(private service:RestService,@Inject(MAT_DIALOG_DATA) public data:any) { }

  form: FormGroup = new FormGroup({
    descrizione: new FormControl(''),
    voto: new FormControl(''),
    data: new FormControl(''),
    attivita: new FormGroup({
    id: new FormControl(''),
  }),
    utente:new FormGroup({
      id:new FormControl('')
    })
});

  ngOnInit(): void {
  }
  aggiungi(){
    this.form.value.attivita.id=this.data.id
    this.form.value.utente.id=JSON.parse(localStorage.getItem("user")!).id
    console.log(this.form.value);
    this.service.addRecensione(this.form.value).subscribe({
      next:()=>{
        
      }
    })
    window.location.reload();
  }
}
