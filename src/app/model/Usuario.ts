import { Avaliacao } from "./Avaliacao";
import { Vaga } from "./Vaga";

export class Usuario{

  public idUsuario: number;
  public nomeUsuario: string;
  public email: string;
  public senha: string;
  public foto: string;

  public tipo: string;
  public sexualidade: string;
  public pcdIntelectual: string;
  public pcdFisica: string;
  public pcdVisual: string;
  public pcdAuditiva: string;
  public pcdMultiplas: string;
  public genero: string;
  public etnia: string;
  public generoLgbtqia: string;
  public generoMulher: string;
  public generoTrans: string;
  public negro: string;
  public indigena: string;

  public avaliacao: Avaliacao[];
  public vaga: Vaga[];
}