//	caelumpic/src/app/painel/painel.component.ts
import {Component, Input} from '@angular/core';

@Component({
    selector: 'painel',
    templateUrl: './painel.component.html'
})
export class PainelComponent {
    @Input() titulo: string;
}