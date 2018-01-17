import {Component, Input} from '@angular/core';

@Component({
    selector: 'foto',
    template: '<img\t[src]="url"\t[alt]="titulo" class="img-responsive\tcenter-block">',
    styles: []
})
export class FotoComponent {
    @Input() titulo: string = 'Titulo';
    @Input() url: string = 'http://www.ilhabela.com.br/wp-content/uploads/2012/11/praia_portinho.jpg?x21935';
    descricao: string = 'Descricao';
}