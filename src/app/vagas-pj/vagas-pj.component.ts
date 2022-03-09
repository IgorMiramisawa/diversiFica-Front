import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { Vaga } from '../model/Vaga';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { VagasPjService } from '../service/vagas-pj.service';


@Component({
  selector: 'app-vagas-pj',
  templateUrl: './vagas-pj.component.html',
  styleUrls: ['./vagas-pj.component.css']
})
export class VagasPjComponent implements OnInit {
  vaga: Vaga = new Vaga()
  listaVagas: Vaga[]

  usuario: Usuario = new Usuario()
  id = environment.idUsuario

  lgbia: string
  trans: string

  pcdVisual: string
  pcdAuditiva: string
  pcdFisica: string
  pcdIntelectual: string
  pcdMultiplas: string
  convenio: string
  dental: string
  remoto: string
  experiencia: string
  etnia: string



  constructor(

    private router: Router,
    private auth: AuthService,
    private vagaspj: VagasPjService,
    public alertas: AlertasService,


  ) {
  }

  ngOnInit() {
    window.scroll(0, 0)


    this.auth.refreshToken()
    this.findByIdUsuario()



    if (environment.token == '') {
      /*alert('Sua seção expirou, faça o login novament.')*/
      this.router.navigate(['/entrar'])

    }
  }

  selecionaGeneroLgbia(event: any) {
    this.lgbia = event.target.value
  }

  selecionaGeneroTrans(event: any) {
    this.trans = event.target.value
  }

  selecionaPCDVisual(event: any) {
    this.pcdVisual = event.target.value
  }

  selecionaPCDAuditiva(event: any) {
    this.pcdAuditiva = event.target.value
  }

  selecionaPCDFisica(event: any) {
    this.pcdFisica = event.target.value
  }

  selecionaPCDIntelectual(event: any) {
    this.pcdIntelectual = event.target.value
  }

  selecionaPCDMultiplas(event: any) {
    this.pcdMultiplas = event.target.value
  }

  selecionaConvenio(event: any) {
    this.convenio = event.target.value
  }

  selecionaDental(event: any) {
    this.dental = event.target.value
  }

  selecionaRemoto(event: any) {
    this.remoto = event.target.value
  }

  selecionaEtnia(event: any) {
    this.etnia = event.target.value
  }


  selecionaExperiencia(event: any) {
    this.experiencia = event.target.value
  }

  findByIdUsuario() {
    this.auth.findByIdUsuario(this.id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }
  cadastrar() {
    this.vaga.etnia = this.etnia
    this.vaga.lgbia = this.lgbia
    this.vaga.trans = this.trans
    this.vaga.pcdVisual = this.pcdVisual
    this.vaga.pcdAuditiva = this.pcdAuditiva
    this.vaga.pcdFisica = this.pcdFisica
    this.vaga.pcdMultiplas = this.pcdMultiplas
    this.vaga.pcdIntelectual = this.pcdIntelectual
    this.vaga.convenio = this.convenio
    this.vaga.dental = this.dental
    this.vaga.experiencia = this.experiencia
    this.vaga.remoto = this.remoto
    this.usuario.idUsuario = environment.idUsuario
    this.vaga.usuario = this.usuario

    this.vagaspj.postVagas(this.vaga).subscribe((resp: Vaga) => {
      this.vaga = resp
      this.alertas.showAlertSuccess('Vaga cadastrada')
      this.findByIdUsuario()
      this.vaga = new Vaga()
    })
  }
}
