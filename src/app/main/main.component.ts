import { Component, OnInit, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Tarefa } from '../models/tarefa.model';
import { TarefaService } from './services/tarefa.service';

import { EditComponent } from './edit/edit.component';
import { InfoComponent } from './info/info.component';
import { SanackbarService } from '../shared/services/sanackbar.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  tarefas: Tarefa[] = [];


  constructor(private tarefasService: TarefaService, public dialog: MatDialog, private snackbar: SanackbarService) {

    this.tarefasService.carregaDados();

    this.tarefas = this.tarefasService.tarefas;
  }

  ngOnInit(): void {
  }



  apagar(id: number) {
    this.tarefasService.apagar(id);
    this.snackbar.snackbarNotify('Tarefa apagada.')
  }

  openDialog(tarefa: Tarefa) {
    this.dialog.open(InfoComponent, {
      data: tarefa
    });
  }

  openDialogEdit(tarefa: Tarefa) {
    this.dialog.open(EditComponent, {
      data: tarefa
    })
  }

  alteraStatus(tarefa: Tarefa) {
    this.tarefasService.alteraStatusTarefa(tarefa);

  }
}
