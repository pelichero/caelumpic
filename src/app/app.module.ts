//	caelumpic/src/app/app.module.ts
import 'rxjs/add/operator/map'
//	caelumpic/src/app/app.module.ts
import 'rxjs/add/operator/map'
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {HttpModule} from '@angular/http'
import {AppComponent} from './app.component'
import {FotoModule} from './foto/foto.module'
import {PainelModule} from './painel/painel.module'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {ListagemComponent} from './listagem/listagem.component'
import {CadastroComponent} from './cadastro/cadastro.component'
import {routing} from './app.routes'

@NgModule({
    imports: [
        BrowserModule,
        FotoModule,
        HttpModule,
        PainelModule,
        FormsModule,
        ReactiveFormsModule,
        routing],
    declarations: [
        AppComponent,
        CadastroComponent,
        ListagemComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}