import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vaga } from 'src/app/model/Vaga';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { VagasPjService } from 'src/app/service/vagas-pj.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-vaga-edit',
  templateUrl: './vaga-edit.component.html',
  styleUrls: ['./vaga-edit.component.css']
})
export class VagaEditComponent implements OnInit {

  vaga: Vaga = new Vaga()

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

  idVaga: number


  step: any = 1

  constructor(private router: Router,
    private auth: AuthService,
    private vagaspj: VagasPjService,
    private route: ActivatedRoute,
    public alertas: AlertasService,) { }

  ngOnInit(){
    if (environment.token == '') {
      this.alertas.showAlertInfo(
        'Sua seção expirou para sua segurança! Faça o login novamente!'
      );
      this.router.navigate(['/entrar']);
    }
    this.auth.refreshToken()
    this.idVaga = this.route.snapshot.params['id']
    this.findByIdVaga(this.idVaga)
  }

  selecionaButton1() {
    this.step = 1
  }

  selecionaButton2() {
    this.step = 2
  }

  selecionaButton3() {
    this.step = 3
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

  findByIdVaga(id: number) {
    this.vagaspj.getByIdVagas(this.idVaga).subscribe((resp: Vaga) => {
      this.vaga = resp
    })
  }
  atualizar() {
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

    this.vagaspj.putVagas(this.vaga).subscribe((resp: Vaga) => {
      this.vaga = resp
      this.alertas.showAlertSuccess('Vaga Atualizada com sucesso!')
      this.router.navigate(['/vagas-pj'])
    })
  }
}
