//	caelumpic/src/app/app.routes.ts
import {RouterModule, Routes} from '@angular/router';
import {ListagemComponent} from './listagem/listagem.component';

const appRoutes: Routes = [
    {path: '', component: ListagemComponent},
];

export	const	routing	=	RouterModule.forRoot(appRoutes);