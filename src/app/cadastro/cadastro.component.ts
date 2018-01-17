//	caelumpic/src/app/cadastro/cadastro.component.ts
import {Component, Input} from '@angular/core';
import {FotoComponent} from '../foto/foto.component';

@Component({
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    foto: FotoComponent = new FotoComponent();

    cadastrar() {
        event.preventDefault();
        console.log(this.foto);
    }
}