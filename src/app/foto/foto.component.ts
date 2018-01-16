import {Component, Input} from '@angular/core';

@Component({
    selector: 'foto',
    template: '<img src="{{url}}" alt="{{titulo}}" class="img-responsive center-block">',
    styles: []
})
export class FotoComponent {
    @Input() titulo;
    @Input() url;
}