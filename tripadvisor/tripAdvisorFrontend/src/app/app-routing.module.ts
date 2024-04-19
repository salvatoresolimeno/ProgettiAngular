import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { ProfiloComponent } from './profilo/profilo.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dettaglio/:id', component: DettaglioComponent},
  {path: 'login', component: LoginComponent},
  {path:'registrazione', component:RegistrazioneComponent},
  {path: 'profilo', component:ProfiloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
