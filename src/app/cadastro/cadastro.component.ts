//	caelumpic/src/app/cadastro/cadastro.component.ts
import {Component} from '@angular/core'
import {FotoComponent} from '../foto/foto.component'
import {FotoService} from "../servicos/foto.service"

@Component({
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    foto: FotoComponent = new FotoComponent()
    service: FotoService
    mensagem: String

    constructor(service: FotoService) {
        this.service = service
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