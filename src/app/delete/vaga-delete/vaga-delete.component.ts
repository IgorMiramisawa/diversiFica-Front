import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vaga } from 'src/app/model/Vaga';
import { VagasPjService } from 'src/app/service/vagas-pj.service';

@Component({
  selector: 'app-vaga-delete',
  templateUrl: './vaga-delete.component.html',
  styleUrls: ['./vaga-delete.component.css']
})
export class VagaDeleteComponent implements OnInit {
  vaga: Vaga = new Vaga()
  idVaga:number
  constructor(
    private router:Router ,
    private vagapj: VagasPjService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(){
    this.idVaga = this.route.snapshot.params['idVaga']
  }

  findByIdTema(id: number) {
    this.vagapj.getByIdVagas(id).subscribe((resp: Vaga)=> {
      this.vaga = resp
    })
  }

}
