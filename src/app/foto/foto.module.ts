//	caelumpic/src/app/foto/foto.module.ts
import {NgModule} from '@angular/core'
import {FotoComponent} from './foto.component'
import {FotoService} from '../servicos/foto.service';

@NgModule({
    declarations: [FotoComponent],
    exports: [FotoComponent],
    providers:	[	FotoService	]
})
export class FotoModule {
}