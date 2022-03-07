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
  sexualidade: string
  genero: string
  pcd: string
  etnia: string

  // Pessoa Juridica
  generoLgbtqia: string
  generoTrans: string
  generoMulher: string
  generoPCDVisual: string
  generoPCDAuditiva: string
  generoPCDFisica: string
  generoPCDIntelectual: string
  generoPCDMultiplas: string
  comunidadeNegra: string
  comunidadeIndigena: string


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

  //Pessoa Fisica
  selecionaSexualidade(event: any) {
    this.sexualidade = event.target.value
  }

  selecionaGenero(event: any) {
    this.genero = event.target.value
  }

  selecionaPCD(event: any) {
    this.pcd = event.target.value
  }

  selecionaEtnia(event: any) {
    this.etnia = event.target.value
  }


  //Pessoa Juridica
  selecionaGeneroLBTQIA(event: any) {
    this.generoLgbtqia = event.target.value
  }

  selecionaGeneroTrans(event: any) {
    this.generoTrans = event.target.value
  }

  selecionaGeneroMulher(event: any) {
    this.generoMulher = event.target.value
  }

  selecionaPCDVisual(event: any) {
    this.generoPCDVisual = event.target.value
  }

  selecionaPCDAuditiva(event: any) {
    this.generoPCDAuditiva = event.target.value
  }

  selecionaPCDFisica(event: any) {
    this.generoPCDFisica = event.target.value
  }

  selecionaPCDIntelectual(event: any) {
    this.generoPCDIntelectual = event.target.value
  }

  selecionaPCDMultiplas(event: any) {
    this.generoPCDMultiplas = event.target.value
  }

  selecionaComunidadeNegra(event: any) {
    this.comunidadeNegra = event.target.value
  }

  selecionaComunidadeIndigena(event: any) {
    this.comunidadeIndigena = event.target.value
  }

  confirmaSenha(event: any) {
    this.confirmSenha = event.target.value
  }


  cadastrar() {
    this.usuario.tipo = this.tipo
    this.usuario.sexualidade = this.sexualidade
    this.usuario.genero = this.genero
    this.usuario.pcd = this.pcd
    this.usuario.etnia = this.etnia
    this.usuario.generoLgbtqia = this.generoLgbtqia
    this.usuario.generoTrans = this.generoTrans
    this.usuario.generoMulher = this.generoMulher
    this.usuario.pcdVisual = this.generoPCDVisual
    this.usuario.pcdAuditiva = this.generoPCDAuditiva
    this.usuario.pcdFisica = this.generoPCDFisica
    this.usuario.pcdMultiplas = this.generoPCDMultiplas
    this.usuario.pcdIntelectual = this.generoPCDIntelectual
    this.usuario.negro = this.comunidadeNegra
    this.usuario.indigena = this.comunidadeIndigena
    if (this.usuario.senha != this.confirmSenha) {
      alert("Tipo de usuário precisa estar selecionado")
    } else {
      if(this.generoLgbtqia == null){
        this.usuario.generoLgbtqia = "Não"
      }
      if(this.generoTrans == null){
        this.usuario.generoTrans = "Não"
      }
      if(this.generoMulher == null){
        this.usuario.generoMulher = "Não"
      }
      if(this.generoPCDVisual == null){
        this.usuario.pcdVisual = "Não"
      }
      if(this.generoPCDAuditiva == null){
        this.usuario.pcdAuditiva = "Não"
      }
      if(this.generoPCDFisica == null){
        this.usuario.pcdFisica = "Não"
      }
      if(this.generoPCDIntelectual == null){
        this.usuario.pcdIntelectual = "Não"
      }
      if(this.generoPCDMultiplas == null){
        this.usuario.pcdMultiplas = "Não"
      }
      if(this.comunidadeNegra == null){
        this.usuario.negro = "Não"
      }
      if(this.comunidadeIndigena == null){
        this.usuario.indigena = "Não"
      }
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(["/entrar"])
        alert("Cadastro realizado com sucesso!")
      })

    }
  }


}
