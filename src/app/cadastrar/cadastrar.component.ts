import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario
  tipo: string
  confirmSenha: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  selecionaTipo(event: any) {
    this.tipo = event.target.value
  }

  // cadastrar() {
  //   if (this.usuario.tipo != "null") {
  //     this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
  //       this.usuario = resp
  //       this.router.navigate(["/entrar"])
  //       alert("Cadastro realizado com sucesso!")
  //     })
  //   } else {
  //     alert("Tipo de usuário precisa estar selecionado")
  //   }
  // }

  confirmaSenha(event: any) {
    this.confirmSenha = event.target.value
  }
}
