import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nomeUsuario
  foto = environment.foto
  id = environment.idUsuario
  tipo = environment.tipo
  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(){
  }

  sair(){
    this.router.navigate(['/inicio'])
    environment.token = ''
    environment.foto = ''
    environment.nomeUsuario = ''
    environment.tipo = ''
    environment.idUsuario = 0
  }
}
