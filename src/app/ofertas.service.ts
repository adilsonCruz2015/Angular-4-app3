import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Oferta } from './shared/oferta.model';

@Injectable()
export class OfertaService {
   
    private url_api = 'http://localhost:3000/ofertas';

    constructor(private http: Http) {   }  

    public getOfertas(): Promise<Oferta[]> {
         return this.http.get(`${this.url_api}?destaque=true`)
        .toPromise()
        .then((resposta: any) => resposta.json());
    } 
    
    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`${this.url_api}?categoria=${categoria}`)
        .toPromise()
        .then((resposta: any) => resposta.json());
    }

    public getOfertasPorId(id: number): Promise<Oferta> {
        return this.http.get(`${this.url_api}?id=${id}`)
        .toPromise()
        .then((resposta: any) => resposta.json()[0]);
    }
}