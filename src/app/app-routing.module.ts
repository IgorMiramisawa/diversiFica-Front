import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { EntrarComponent } from './entrar/entrar.component';

const routes: Routes = [
  {path:'' , redirectTo:'entrar' , pathMatch :'full'} ,
  {path:'entrar' , component: EntrarComponent} ,
  {path:'contato' , component:ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
