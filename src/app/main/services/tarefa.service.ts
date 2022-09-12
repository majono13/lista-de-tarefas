import { Injectable } from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa.model';



@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  tarefas: Tarefa[] = [];


  apagar(id: number) {
    for (let i in this.tarefas) {
      if (this.tarefas[i].id === id) {
        this.tarefas.splice(Number(i), 1)
        this.salvaDados();

        return
      }
    }

  }

  addNovaTarefa(tarefa: Tarefa) {
    console.log(tarefa)
    this.tarefas.push(tarefa);
    console.log(this.tarefas)
    this.salvaDados();
  }

  salvaDados() {
    const dados = JSON.stringify(this.tarefas);

    localStorage.setItem('tarefas', dados);
  }

  carregaDados() {
    const dados = localStorage.getItem('tarefas');

    this.tarefas = JSON.parse(dados);
  }


  editTarefa(tarefa: Tarefa) {
    for (let i in this.tarefas) {
      if (this.tarefas[i].id === tarefa.id) {
        this.tarefas[i] = tarefa;
      };

      this.salvaDados();
    }
  }

  alteraStatusTarefa(tarefa: Tarefa) {
    tarefa.status = !tarefa.status;
    this.salvaDados();
  }

}
