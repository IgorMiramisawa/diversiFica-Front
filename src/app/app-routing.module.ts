import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContatoComponent } from './contato/contato.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path:'' , redirectTo:'entrar' , pathMatch :'full'},
  {path:'entrar', component: EntrarComponent},
  {path:'contato', component:ContatoComponent},
  {path:'sobre', component:SobreComponent},
  {path:'inicio', component:InicioComponent},
  {path:'login', component:CadastrarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
