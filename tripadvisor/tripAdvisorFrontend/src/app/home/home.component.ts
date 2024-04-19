import { Component } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private service:RestService){}
  listaBar:any[]=[];
  ngOnInit(){
    this.service.getAllBar().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.listaBar=res;
      }
    })
  }

}
