import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { SanackbarService } from 'src/app/shared/services/sanackbar.service';


import { TarefaService } from '../services/tarefa.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @ViewChild('form') form: NgForm;

  formTarefa = this.fb.group({
    titulo: ['', [Validators.required, Validators.minLength(3)]],
    dia: ['', [Validators.required]],
    hora: [''],
    status: [false],
    descricao: ['', [Validators.maxLength(255)]],
    importante: [false, [Validators.required]]
  });

  constructor(private tarefasService: TarefaService, private fb: FormBuilder, private sanackbar: SanackbarService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const importante = this.formTarefa.value.importante == 1 ? true : false;

    const novaTarefa = {
      titulo: this.formTarefa.value.titulo,
      dia: this.getData(),
      status: this.formTarefa.value.status,
      descricao: this.formTarefa.value.descricao,
      importante: importante,
      id: this.tarefasService.tarefas.length + 9
    };

    this.tarefasService.addNovaTarefa(novaTarefa);
    this.limpaForm();
    this.sanackbar.snackbarNotify('Tarefa salva com sucesso!')
  }

  random() {
    const random = Math.random() * (1000 - 10000) + 1000;

    return random;
  }

  getData() {
    const data = this.formTarefa.value.dia;

    return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;
  }

  limpaForm() {
    this.form.resetForm();
  }
}
