import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { ActivatedRoute } from '@angular/router';
import { AggiungiComponent } from '../aggiungi/aggiungi.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css'],
})
export class DettaglioComponent implements OnInit {
  id!: any;
  bar!: any;
  listaRecensioni!: any[];
  log: boolean = false;

  constructor(
    private service: RestService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private sanitizer: DomSanitizer
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('user')) {
      this.log = true;
    }
    this.service.getBar(this.id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.bar = res;
      },
    });
    this.service.getRecensioni(this.id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.listaRecensioni = res;
      },
    });
  }

  openDialog() {
    this.dialog.open(AggiungiComponent, {
      data: {
        id: this.id,
      },
    });
  }
  transformImg(path: string) {
    let base64String = 'data:image/jpeg;base64, ' + ' ' + path;
    return this.sanitizer.bypassSecurityTrustResourceUrl(base64String);
  }
}
