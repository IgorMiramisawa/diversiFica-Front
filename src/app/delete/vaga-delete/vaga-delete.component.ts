import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { Vaga } from 'src/app/model/Vaga';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { VagasPjService } from 'src/app/service/vagas-pj.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-vaga-delete',
  templateUrl: './vaga-delete.component.html',
  styleUrls: ['./vaga-delete.component.css']
})
export class VagaDeleteComponent implements OnInit {
  usuario: Usuario = new Usuario()
  vaga: Vaga = new Vaga()
  idVaga:number
  constructor(
    private router:Router ,
    private vagapj: VagasPjService,
    private auth: AuthService,
    private route : ActivatedRoute,
    public alertas: AlertasService
  ) { }

  ngOnInit(){

    if(environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    this.idVaga = this.route.snapshot.params['id']
    this.findByIdVaga(this.idVaga)

  }

  findByIdVaga(id: number) {
    this.vagapj.getByIdVagas(id).subscribe((resp: Vaga)=> {
      this.vaga = resp
    })
  }

  apagar(){
    this.vagapj.deleteVagas(this.idVaga).subscribe(()=> {
      this.alertas.showAlertSuccess('Vaga Apagada com sucesso!')
      this.router.navigate(['/vagas-pj'])
    })
  }


}
