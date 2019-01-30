import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Pedido } from "./shared/pedido.model";
import { URL_API } from "./app.api";

@Injectable()
export class OrdemcompraService {

    constructor(private http: Http) {}

    public efetivarCompra(pedido: Pedido): Observable<number> {
        let headers: Headers = new Headers();

        headers.append('Content-type', 'application/json');

       return this.http.post(
        `${URL_API}/pedidos`,
         JSON.stringify(pedido),
         new RequestOptions({ headers: headers  })
       ).pipe(
        map((resposta: Response) => resposta.json().id)
       );
    }
}