import { Usuario } from "./Usuario";

export class Vaga{

  public idVaga: number;
  public nomeVaga: string;
  public descricao: string;
  public cargo: number;
  public salario: number;
  public beneficios: string;
  public datePostagem: Date;
  public convenio: number;
  public dental: string;
  public remoto: string;
  public pcdIntelectual: string;
  public pcdFisica: string;
  public pcdVisual: string;
  public pcdAuditiva: string;
  public pcdMultiplas: string;
  public lgbia: string;
  public trans: string;
  public experiencia: string;
  public etnia: string;
  public usuario: Usuario;
}