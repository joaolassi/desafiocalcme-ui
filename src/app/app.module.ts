import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { CoreModule } from './core/core.module';
import { PessoasModule } from './pessoas/pessoas.module'
import { PessoaSalvaComponent } from './pessoas/pessoa-salva/pessoa-salva.component';
import { PessoaComponent } from './pessoas/pessoa/pessoa.component';
import { PessoaService } from './pessoas/pessoa.service';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '',  redirectTo: 'pessoas', pathMatch: 'full'},
  { path: 'pessoas', component: PessoaComponent},
  { path: 'salva', component: PessoaSalvaComponent }
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    ToastModule,

    CoreModule,
    PessoasModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    MessageService,

    PessoaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
