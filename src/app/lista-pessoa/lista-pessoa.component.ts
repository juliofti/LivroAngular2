import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css']
})
export class ListaPessoaComponent implements OnInit {

pessoas: string [] = ['Lucas', 'Pedro', 'João' , 'Julio'];
nome: string = "Júlio";

  constructor() { }

  ngOnInit(): void {
  }

}
