import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  nome: string
  email: string
  mensagem: string

  constructor(
    private router: Router,
    public alertas: AlertasService
  ) { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

  enviarContato() {
    console.log(this.nome + this.email + this.mensagem)
    if (this.nome == "" || this.email == "" || this.mensagem == "" || this.nome == null || this.email == null || this.mensagem == null) {
      this.alertas.showAlertDanger('Todos os campos precisam ser preenchidos!')
    } else {
      this.alertas.showAlertSuccess('Recebemos seu e-mail e logo entraremos em contato!')
      this.router.navigate(['/inicio'])
    }
  }

}
