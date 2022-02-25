import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario
  tipo: string

  constructor() { }

  ngOnInit(): void {
  }

  selecionaTipo(event: any) {
    this.tipo = event.target.value
  }
}
