//	caelumpic/src/app/foto/foto.service.ts
import {Http, Headers, Response} from '@angular/http'
import {FotoComponent} from '../foto/foto.component'
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";

@Injectable()
export class FotoService {
    headers: Headers
    url: string = 'http://localhost:3000/v1/fotos'

    constructor(private http: Http) {
        this.headers = new Headers()
        this.headers.append('Content-Type', 'application/json')
    }

    lista() {
        return this.http.get(this.url)
            .map(res => res.json())
    }

    consultar(id: string): Observable<FotoComponent> {
        return this.http.get(`${this.url}/${id}`)
            .map(resposta => resposta.json())
    }

    cadastra(foto: FotoComponent) {
        if (foto._id) {
            return this.http.put(this.url + '/' + foto._id, JSON.stringify(foto),
                {headers: this.headers});
        } else {
            return this.http.post(this.url, JSON.stringify(foto),
                {headers: this.headers});
        }
    }

    remover(foto: FotoComponent): Observable<Response> {
        return this.http.delete(`${this.url}/${foto._id}`)
    }
}
