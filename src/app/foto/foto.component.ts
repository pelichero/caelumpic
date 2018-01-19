import {Component, Input} from '@angular/core';

@Component({
    selector: 'foto',
    templateUrl: './foto.component.html'
})
export class FotoComponent {
    @Input() titulo: string = ''
    @Input() url: string = 'https://www.todoestudo.com.br/wp-content/uploads/2015/03/paisagem-natural-1024x679.jpg'
    descricao: string = ''
    _id: string
}