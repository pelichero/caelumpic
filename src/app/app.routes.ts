//	caelumpic/src/app/app.routes.ts
import {RouterModule} from '@angular/router';
import {ListagemComponent} from './listagem/listagem.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import {RouterModule, Routes} from '@angular/router';
import {ListagemComponent} from './listagem/listagem.component';
import {CadastroComponent} from './cadastro/cadastro.component';

const appRoutes: Routes = [
    {path: '', component: ListagemComponent},
];