//	caelumpic/src/app/listagem/listagem.component.ts
import {Component} from '@angular/core';
import {FotoComponent} from "../foto/foto.component";
import {FotoService} from "../servicos/foto.service";
import {CadastroComponent} from "../cadastro/cadastro.component";

@Component({
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {
    fotos: Array<FotoComponent> = new Array<FotoComponent>()
    mensagem: String
    cadastro: CadastroComponent

    constructor(private service: FotoService) {
        service.lista()
            .subscribe(
                fotos	=>	this.fotos	=	fotos,
                erro	=>	console.log(erro)
            );
        }

    excluir(foto:FotoComponent){
        this.service.remover(foto).subscribe(() => {
            this.fotos = this.fotos.filter(fotoFilter => (fotoFilter != foto))
            this.mensagem = `Deletado com sucesso`
            setTimeout(() => this.mensagem = '', 3000)
        }, erro => {
            this.mensagem = erro
        })
    }
}