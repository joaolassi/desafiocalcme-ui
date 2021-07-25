import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pessoa-salva',
  templateUrl: './pessoa-salva.component.html',
  styleUrls: ['./pessoa-salva.component.css']
})
export class PessoaSalvaComponent implements OnInit {

  constructor(
    private title: Title,
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Pessoa salva');
  }

}
