//	caelumpic/src/app/cadastro/cadastro.component.ts
import {Component, Input} from '@angular/core';
import {FotoComponent} from '../foto/foto.component';
import {Http, Headers} from '@angular/http'

@Component({
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    foto: FotoComponent = new FotoComponent()

    ajax: Http

    constructor(ajax: Http) {
        this.ajax = ajax
    }

    cadastrar() {
        //	cria	uma	instância	de	Headers
        let headers = new Headers();
        //	Adiciona	o	tipo	de	conteúdo	application/json
        headers.append('Content-Type', 'application/json');

        this.ajax.post(
            'http://localhost:3000/v1/fotos',
            JSON.stringify(this.foto),
            {headers: headers}
        ).subscribe(
            value => console.log(value),
            erro => console.log(erro)
        )

    }
}