//	caelumpic/src/app/app.component.ts
import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    title: string = 'Caelum	Pic'
    fotos: Object[] = []

    constructor(http: Http) {
        http.get('http://demo0313340.mockable.io/images')
            .map(res => res.json())
            .subscribe(
                fotos => this.fotos = fotos,
                erro => console.log(erro)
            )
    }
}