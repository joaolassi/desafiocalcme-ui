import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Pessoa } from './../core/model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoasUrl: string;

  constructor(private http: HttpClient) {
    this.pessoasUrl = `${environment.apiUrl}/pessoas`;
  }

  adicionar(pessoa: Pessoa): Promise<Pessoa> {
    console.log(pessoa.telefone)
    return this.http.post<Pessoa>(this.pessoasUrl, pessoa)
      .toPromise();
  }
}
