import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Oferta } from './shared/oferta.model';

import { Observable } from 'rxjs';

@Injectable()
export class OfertaService {
   
    constructor(private http: Http) {   }  

    public getOfertas(): Observable<any> {
        return this.http.get('http://localhost:3000/ofertas?destaque=true');
        
    }    
}