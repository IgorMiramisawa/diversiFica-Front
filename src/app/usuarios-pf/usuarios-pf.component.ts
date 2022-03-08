import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-usuarios-pf',
  templateUrl: './usuarios-pf.component.html',
  styleUrls: ['./usuarios-pf.component.css'],
})
export class UsuariosPfComponent implements OnInit {

  constructor(
    public authService: AuthService

  ) { }

  ngOnInit(){
    window.scroll(0,0);
    this.authService.refreshToken()
  }
}
