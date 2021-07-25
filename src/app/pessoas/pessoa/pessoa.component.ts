import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Pessoa } from 'src/app/core/model';
import { PessoaService } from '../pessoa.service';


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css'],
  providers: [{ provide: ErrorHandlerService }]
})

export class PessoaComponent implements OnInit {

  pessoa = new Pessoa();


  constructor(
    private pessoaService: PessoaService,
    private errorHandler: ErrorHandlerService,
    private title: Title,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Nova pessoa');
  }



  salvar(form: NgForm) {
    this.pessoaService.adicionar(this.pessoa)
      .then(() => {
        this.router.navigate(['/salva']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
}
