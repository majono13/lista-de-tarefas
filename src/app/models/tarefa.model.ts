export interface Tarefa {
  titulo: string,
  dia: string,
  hora?: number,
  status: boolean,
  descricao?: string,
  importante: boolean,
  id?: number
}
