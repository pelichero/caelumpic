import {Component, Input} from '@angular/core';

@Component({
    selector: 'foto',
    templateUrl: './foto.component.html'
})
export class FotoComponent {
    @Input() titulo: string = 'Titulo'
    @Input() url: string = '    '
    descricao: string = 'Descricao'
    _id: string
}