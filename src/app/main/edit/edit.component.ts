import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Tarefa } from 'src/app/models/tarefa.model';

import { SanackbarService } from 'src/app/shared/services/sanackbar.service';
import { TarefaService } from '../services/tarefa.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  formEditTarefa = this.fb.group({
    titulo: [this.tarefa.titulo, [Validators.required, Validators.minLength(3)]],
    dia: [this.tarefa.dia, [Validators.required]],
    hora: [this.tarefa.hora],
    status: [false],
    descricao: [this.tarefa.descricao, [Validators.maxLength(255)]],
    importante: [this.tarefa.importante, [Validators.required]],
    id: [this.tarefa.id]
  })
  constructor(
    private tarefaService: TarefaService,
    private fb: FormBuilder,
    private sanackbar: SanackbarService,
    @Inject(MAT_DIALOG_DATA) public tarefa: Tarefa,
    private dialogRef: MatDialogRef<EditComponent>) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const importante = this.formEditTarefa.value.importante == 1 ? true : false;

    this.formEditTarefa.value.importante = importante;

    const tarefaEditada: Tarefa = this.formEditTarefa.value;
    this.tarefaService.editTarefa(tarefaEditada);

    this.cancelar();

    this.sanackbar.snackbarNotify('Taref editada com sucesso!');
  }

  cancelar() {
    this.dialogRef.close();
  }

}
