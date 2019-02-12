import { Component, OnInit } from '@angular/core';

import { OfertaService } from '../ofertas.service';
import { Observable, Subject } from 'rxjs';
import { Oferta } from '../shared/oferta.model';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';
import { of } from 'rxjs'

@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.css'],
    providers:[ OfertaService ]
})

export class topoComponent implements OnInit {

    public ofertas: Observable<Oferta[]>
    private subjectPesquisa: Subject<string> = new Subject<string>();
    
    constructor(private ofertasService: OfertaService) { }

    ngOnInit() {
      
        this.ofertas = this.subjectPesquisa // retorno da Oferta[]
             .pipe(
                     debounceTime(1000), // executa a ção do switchmap apóes 1 segundo
                     distinctUntilChanged(), // para fazer pesquisas distintas
                     switchMap((termo: string) => { return termo.trim() === '' ?  of<Oferta[]>([]) : this.ofertasService.pesquisaOfertas(termo); }),
                     catchError((erro: any)    => { return of<Oferta[]>([]); })
                  );
              
    }    

    public pesquisa(termoDaBusca: string): void {
      this.subjectPesquisa.next(termoDaBusca);
    }

    public limpaPesquisa(): void {
      this.subjectPesquisa.next('');
    }
}