//	caelumpic/src/app/cadastro/cadastro.component.ts
import {Component} from '@angular/core'
import {FotoComponent} from '../foto/foto.component'
import {FotoService} from "../servicos/foto.service"
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    foto: FotoComponent = new FotoComponent()
    service: FotoService
    mensagem: String
    fotoForm: FormGroup

    constructor(service: FotoService, private activatedRoute: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
        this.service = service
        this.activatedRoute.params.subscribe(p => {
            if (p.id) {
                this.carregaFotoId(p.id)
            }
        })

        this.fotoForm = this.formBuilder.group({
            titulo:['', Validators.compose(
                [Validators.required,	Validators.minLength(4)]
            )],
            url:['', Validators.required],
            descricao:['', Validators.required]
        })
    }

    carregaFotoId(id) {
        this.service.consultar(id).subscribe(
            foto => this.foto = foto,
            erro => this.mensagem = erro
        )
    }

    cadastrar() {
        console.log(this.foto)

        this.service
            .cadastra(this.foto)
            .subscribe(() => {
                this.foto = new FotoComponent()
                this.mensagem = `Foto ${this.foto.titulo}	salva	com	sucesso`
                setTimeout(() => this.mensagem = '', 3000)
                this.router.navigate([''])
            }, erro => {
                this.mensagem = erro
            })
    }
}