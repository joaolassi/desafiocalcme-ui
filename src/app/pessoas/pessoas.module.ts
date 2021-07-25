import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaComponent } from './pessoa/pessoa.component';

import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PessoaSalvaComponent } from './pessoa-salva/pessoa-salva.component';
import {InputNumberModule} from 'primeng/inputnumber';


@NgModule({
  declarations: [
    PessoaComponent,
    PessoaSalvaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    InputTextModule,
    InputNumberModule,
    ButtonModule,
    FormsModule,

    InputMaskModule
  ],
  exports: [
    PessoaComponent
  ],
})
export class PessoasModule { }
