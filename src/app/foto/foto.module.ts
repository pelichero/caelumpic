//	caelumpic/src/app/foto/foto.module.ts
import {NgModule} from '@angular/core'
import {FotoComponent} from './foto.component'
import {FotoService} from '../servicos/foto.service';
import {FiltroPorTitulo} from './foto.pipes';

@NgModule({
    declarations: [FotoComponent, FiltroPorTitulo],
    exports: [FotoComponent, FiltroPorTitulo],
    providers: [FotoService]
})
export class FotoModule {
}