import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Vaga } from '../model/Vaga';
import { VagasPjService } from '../service/vagas-pj.service';


@Component({
  selector: 'app-vagas-pj',
  templateUrl: './vagas-pj.component.html',
  styleUrls: ['./vagas-pj.component.css']
})
export class VagasPjComponent implements OnInit {
  vaga : Vaga = new Vaga ()
  listaVagas: Vaga []
  constructor(
    private router: Router ,
    private vagaspj: VagasPjService
  ) { }

  ngOnInit() {
    if(environment.token == '' ){
      /*alert('Sua seção expirou, faça o login novament.')*/
      this.router.navigate(['/entrar'])
    }

  }
  findAllVagas(){
    this.vagaspj.getAllVagas().subscribe((resp: Vaga[])=> {
      this.listaVagas = resp
    })
  }
  cadastrar() {
    this.vagaspj.postVagas(this.vaga).subscribe((resp: Vaga)=> {
      this.vaga = resp
      alert('Vaga cadastrada')
      this.findAllVagas()
      this.vaga = new Vaga ()
    })
  }
}
