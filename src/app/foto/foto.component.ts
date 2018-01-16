import {Component, Input} from '@angular/core';

@Component({
    selector: 'foto',
    template: '<img\t[src]="url"\t[alt]="titulo" class="img-responsive\tcenter-block">',
    styles: []
})
export class FotoComponent {
    @Input() titulo;
    @Input() url;
}