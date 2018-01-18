import {Component, Input} from '@angular/core';

@Component({
    selector: 'foto',
    templateUrl: './foto.component.html'
})
export class FotoComponent {
    @Input() titulo: string = 'Titulo';
    @Input() url: string = 'http://www.ilhabela.com.br/wp-content/uploads/2012/11/praia_portinho.jpg?x21935';
    descricao: string = 'Descricao';
}