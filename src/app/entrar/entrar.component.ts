import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin
  constructor(
    private router: Router,
    private auth: AuthService,
    public alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  entrar() {
    this.auth.entrar(this.usuarioLogin).subscribe({
      next: (resp: UsuarioLogin) => {
        this.usuarioLogin = resp

        environment.foto = this.usuarioLogin.foto
        environment.nomeUsuario = this.usuarioLogin.nomeUsuario
        environment.idUsuario = this.usuarioLogin.idUsuario
        environment.token = this.usuarioLogin.token
        environment.tipo = this.usuarioLogin.tipo

        this.router.navigate(['/inicio'])

      },
      error: erro => {
        if (erro.status == 401) {
        this.alertas.showAlertDanger("Usuario ou senha inválidos")
        }
      }
    })
  }
}
