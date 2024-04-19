import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-elimina',
  templateUrl: './elimina.component.html',
  styleUrls: ['./elimina.component.css']
})
export class EliminaComponent {

  constructor(private service:RestService ,@Inject(MAT_DIALOG_DATA) public data:any) { }

  elimina(){
    this.service.deleteRefs(this.data.id).subscribe({
      next:()=>{     
      }
    })
  }
}
