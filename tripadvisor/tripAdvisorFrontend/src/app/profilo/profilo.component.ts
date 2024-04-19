import { Component } from '@angular/core';
import { RestService } from '../services/rest.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ModificaComponent } from '../modifica/modifica.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EliminaComponent } from '../elimina/elimina.component';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent {
  constructor(private service:RestService,private sanitizer: DomSanitizer, public dialog: MatDialog ) { }

  listaRef:any[]=[]
  utente:any;
  img:any

  ngOnInit(){
    this.utente = JSON.parse(localStorage.getItem("user")!);
    this.transformImg(this.utente.img);

    this.service.getRefsByUtente(this.utente.id).subscribe({
      next:(res:any)=>{
        this.listaRef=res
      }
    })
  }
  transformImg(path:string) {
    let base64String = "data:image/*;base64, " + " " + path;
    this.img = this.sanitizer.bypassSecurityTrustResourceUrl(base64String);
  }

  eliminaRecensione(id: any) {
    const dialogRef = this.dialog.open(EliminaComponent, {
      data: {
        id: id,
      },
    })
    dialogRef.afterClosed().subscribe(res => {
      this.service.getRefsByUtente(this.utente.id).subscribe({
        next:(res:any)=>{
          this.listaRef=res
        }
      })
    });
   
    ;}

    modificaRecensione(id: any) {
      const dialogRef = this.dialog.open(ModificaComponent, {
        data: {
          id: id,
        },
      })

      dialogRef.afterClosed().subscribe(res => {
        this.service.getRefsByUtente(this.utente.id).subscribe({
          next: (res: any) => {
            this.listaRef = res
          }
        })
      })
    }
  }

