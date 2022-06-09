import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})

export class AlunosComponent implements OnInit {

  aluno: Aluno = {
    id: 1,
    nome: 'Ana',
    nascimento: '19/05/2022',
    curso: 'Tecnologia da Informação',
    semestre: 2,
    unidade: 'Usabilidade',
    nota: 83,
  };  

  constructor() { }

  ngOnInit(): void {
  }

}
