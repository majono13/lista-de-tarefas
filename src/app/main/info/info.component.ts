import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Tarefa } from 'src/app/models/tarefa.model';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public tarefa: Tarefa) { }

  ngOnInit(): void {
  }

}
