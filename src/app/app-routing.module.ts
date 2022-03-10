import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContatoComponent } from './contato/contato.component';
import { VagaDeleteComponent } from './delete/vaga-delete/vaga-delete.component';
import { VagaEditComponent } from './edit/vaga-edit/vaga-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { SobreComponent } from './sobre/sobre.component';
import { UsuariosPfComponent } from './usuarios-pf/usuarios-pf.component';
import { VagasPfComponent } from './vagas-pf/vagas-pf.component';
import { VagasPjComponent } from './vagas-pj/vagas-pj.component';

const routes: Routes = [
  {path:'' , redirectTo:'inicio' , pathMatch :'full'},
  {path:'entrar', component: EntrarComponent},
  {path:'contato', component:ContatoComponent},
  {path:'sobre', component:SobreComponent},
  {path:'inicio', component:InicioComponent},
  {path:'cadastrar', component:CadastrarComponent},
  {path:'vagas-pf', component:VagasPfComponent},
  {path:'vagas-pj', component: VagasPjComponent},
  {path: 'usuarios-pf', component:UsuariosPfComponent},
  {path: 'vaga-delete/:id', component:VagaDeleteComponent},
  {path: 'vaga-edit/:id' , component:VagaEditComponent},
  {path: '**' , component:NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
