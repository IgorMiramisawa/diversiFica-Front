import { Avaliacao } from "./Avaliacao";
import { Vaga } from "./Vaga";

export class Usuario{

  public idUsuario: number;
  public nomeUsuario: string;
  public email: string;
  public senha: string;
  public tipo: string;
  public comunidade: string;
  public sexualidade: string;
  public genero: string;
  public pcds: string;
  public etnia: string;
  public foto: string;
  public avaliacao: Avaliacao[];
  public vaga: Vaga[]
}