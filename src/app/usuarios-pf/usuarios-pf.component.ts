import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-usuarios-pf',
  templateUrl: './usuarios-pf.component.html',
  styleUrls: ['./usuarios-pf.component.css'],
})
export class UsuariosPfComponent implements OnInit {

  idUsuario = environment.idUsuario
  nome = environment.nomeUsuario
  foto = environment.foto
  tipo = environment.tipo
  sexo = environment.sexualidade
  pcdintelectual = environment.pcdIntelectual
  pcdFisica = environment.pcdFisica
  pcdVisual = environment.pcdVisual
  pcdAuditiva = environment.pcdAuditiva
  pcdMultiplas = environment.pcdMultiplas
  genero = environment.genero
  etinia = environment.etinia
  pcd = environment.pcd
  generoLgbtqia = environment.generoLgbtqia
  generoMulher = environment.generoMulher
  generoTrans = environment.generoTrans
  negro = environment.negro
  indigena = environment.indigena

  constructor(
    public authService: AuthService,
    private router: Router,
    private alertas: AlertasService

  ) { }

  ngOnInit(){
    window.scroll(0,0);

    // if (environment.token == '') {
    //   this.alertas.showAlertInfo(
    //     'Sua seção expirou para sua segurança! Faça o login novamente!'
    //   );
    //   this.router.navigate(['/entrar']);
    // }

    this.authService.refreshToken()
  }
}
