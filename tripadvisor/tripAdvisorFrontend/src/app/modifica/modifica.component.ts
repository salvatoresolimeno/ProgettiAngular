import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestService } from '../services/rest.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent {
  
  constructor(private service:RestService ,@Inject(MAT_DIALOG_DATA) public data:any) { }
  
  form: FormGroup = new FormGroup({
    descrizione: new FormControl(''),
    voto: new FormControl(''),
    data: new FormControl(''),
});

  ngOnInit(): void {
  }
  modifica(){
    this.service.editRefs(this.form.value,this.data.id).subscribe({
      next:()=>{     
      }
    })
    window.location.reload();
  }
}
