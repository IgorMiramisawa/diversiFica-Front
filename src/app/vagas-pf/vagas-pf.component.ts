import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vaga } from '../model/Vaga';
import { AuthService } from '../service/auth.service';
import { VagasPjService } from '../service/vagas-pj.service';

@Component({
  selector: 'app-vagas-pf',
  templateUrl: './vagas-pf.component.html',
  styleUrls: ['./vagas-pf.component.css']
})
export class VagasPfComponent implements OnInit {

  listaVagas: Vaga[]

  constructor(
    public auth: AuthService,
    private vagas: VagasPjService
    ) { }

  ngOnInit(){
    window.scroll(0,0)

    this.auth.refreshToken()
    this.listVagas()
  }

  listVagas(){
    this.vagas.getAllVagas().subscribe((resp: Vaga[]) => {
      this.listaVagas = resp
    })
  }


}
