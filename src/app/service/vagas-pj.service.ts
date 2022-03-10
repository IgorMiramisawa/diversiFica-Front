
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { Vaga } from '../model/Vaga';

@Injectable({
  providedIn: 'root'
})
export class VagasPjService {

  constructor(private http: HttpClient) { }
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  }

  // Puxar todas Vagas
  getAllVagas(): Observable<Vaga[]> {
    return this.http.get<Vaga[]>('https://diversificageneration.herokuapp.com/vagas/get-all');
  }

  getByIdVagas(idVaga: number): Observable<Vaga> {
    return this.http.get<Vaga>(
      `https://diversificageneration.herokuapp.com/vagas/${idVaga}`,
      this.token
    );
  }

  getByTituloVagas(nomeVaga: string): Observable<Vaga[]> {
    return this.http.get<Vaga[]>(`https://diversificageneration.herokuapp.com/vagas/nome-vaga/${nomeVaga}`, this.token)
  }

  // Postar Vagas
  postVagas(vagas: Vaga): Observable<Vaga> {
    return this.http.post<Vaga>(
      'https://diversificageneration.herokuapp.com/vagas/save',vagas,this.token
    );
  }

  // Atualizar Vagas
  putVagas(vagas: Vaga): Observable<Vaga> {
    return this.http.put<Vaga>(
      'https://diversificageneration.herokuapp.com/vagas/update',vagas,this.token
    );
  }

  // Deletar Vagas
  deleteVagas(id: number) {
    return this.http.delete(
      `https://diversificageneration.herokuapp.com/vagas/delete/${id}`,
      this.token
    );
  }
}
