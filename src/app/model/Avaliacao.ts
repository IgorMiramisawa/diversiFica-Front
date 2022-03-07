import { Usuario } from "./Usuario";

export class Avaliacao{

  public idAvaliacao: number;
  public sexualidade: number;
  public genero: number;
  public pcds: number;
  public etnia: number;
  public comentario: string;
  public usuario: Usuario;
}