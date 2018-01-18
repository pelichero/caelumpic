//	caelumpic/src/app/foto/foto.service.ts
import {Http, Headers} from '@angular/http'
import {FotoComponent} from '../foto/foto.component'
import {Injectable} from '@angular/core';

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

    cadastra(foto: FotoComponent) {
        return this.http.post(this.url, JSON.stringify(foto),
            {headers: this.headers})
    }
}
