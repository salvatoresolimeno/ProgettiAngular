import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }


  getAllBar() {
    return this.http.get(`http://localhost:8080/api/attivita/getAll`, {
    });
  }

  getRecensioni(id:number) {
    return this.http.get(`http://localhost:8080/api/recensioni/find/${id}`, {
    });
  }

  addBar(bar:any){
    return this.http.post('http://localhost:8080/api/attivita/add', bar, {
    });
  }
  
  addRecensione(recensione:any){
    return this.http.post('http://localhost:8080/api/recensioni/add', recensione, {
    });
  }

  getBar(id:number) {
    return this.http.get(`http://localhost:8080/api/attivita/get/${id}`, {
    });
  }

  login(email:string, password:string) {
    return this.http.get('http://localhost:8080/api/utente/login', {
      params: {
        email: email,
        password: password
      }
    });
}
  createUser(utente:any) {
    return this.http.post('http://localhost:8080/api/utente/registrazione', utente, {
    })
  }

  getRefsByUtente(id:number) {
    return this.http.get('http://localhost:8080/api/recensioni/findByUtente', {
      params: {
        id: id
      }
    });
  }

  editRefs(recensione:any,id:any){
    return this.http.put(`http://localhost:8080/api/recensioni/edit/${id}`, recensione, {
    });
    
  }
  deleteRefs(id:any) {
    return this.http.delete(`http://localhost:8080/api/recensioni/delete/${id}`, {
    });
  }

}
