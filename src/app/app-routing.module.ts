import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContatoComponent } from './contato/contato.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';
import { UsuariosPfComponent } from './usuarios-pf/usuarios-pf.component';
import { VagasPfComponent } from './vagas-pf/vagas-pf.component';

const routes: Routes = [
  {path:'' , redirectTo:'entrar' , pathMatch :'full'},
  {path:'entrar', component: EntrarComponent},
  {path:'contato', component:ContatoComponent},
  {path:'sobre', component:SobreComponent},
  {path:'inicio', component:InicioComponent},
  {path:'cadastrar', component:CadastrarComponent},
  {path:'vagas-pf', component:VagasPfComponent},
  {path: 'usuarios-pf', component:UsuariosPfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
