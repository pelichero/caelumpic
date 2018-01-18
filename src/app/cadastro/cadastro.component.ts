//	caelumpic/src/app/cadastro/cadastro.component.ts
import {Component} from '@angular/core'
import {FotoComponent} from '../foto/foto.component'
import {FotoService} from "../servicos/foto.service"
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    foto: FotoComponent = new FotoComponent()
    service: FotoService
    meuForm:	FormGroup
    mensagem: String

    constructor(service: FotoService, fb:	FormBuilder) {
        this.service = service

        this.meuForm	=	fb.group({
            titulo:	['',	Validators.required],
            url:	['',	Validators.required],
            descricao:	[''],
        })
    }

    cadastrar() {
        console.log(this.foto)

        this.service
            .cadastra(this.foto)
            .subscribe(() => {
                this.foto = new FotoComponent()
                this.mensagem = `Foto ${this.foto.titulo}	salva	com	sucesso`
                setTimeout(() => this.mensagem = '', 3000)
            }, erro => {
                this.mensagem = erro
            })
    }
}