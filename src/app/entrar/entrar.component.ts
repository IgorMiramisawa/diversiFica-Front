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

  usuarioLogin: UsuarioLogin = new UsuarioLogin()

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

        environment.token = this.usuarioLogin.token
        environment.idUsuario = this.usuarioLogin.idUsuario
        environment.nomeUsuario = this.usuarioLogin.nomeUsuario
        environment.foto = this.usuarioLogin.foto
        environment.tipo = this.usuarioLogin.tipo
        environment.sexualidade = this.usuarioLogin.sexualidade
        environment.pcdIntelectual = this.usuarioLogin.pcdIntelectual
        environment.pcdFisica = this.usuarioLogin.pcdFisica
        environment.pcdVisual = this.usuarioLogin.pcdVisual
        environment.pcdAuditiva = this.usuarioLogin.pcdAuditiva
        environment.pcdMultiplas = this.usuarioLogin.pcdMultiplas
        environment.genero = this.usuarioLogin.genero
        environment.etinia = this.usuarioLogin.etnia
        environment.pcd = this.usuarioLogin.pcd
        environment.generoLgbtqia = this.usuarioLogin.generoLgbtqia
        environment.generoMulher = this.usuarioLogin.generoMulher
        environment.generoTrans = this.usuarioLogin.generoTrans
        environment.negro = this.usuarioLogin.negro
        environment.indigena = this.usuarioLogin.indigena

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
