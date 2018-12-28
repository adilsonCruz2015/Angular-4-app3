import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { OfertaService } from 'src/app/ofertas.service';


@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [ OfertaService ]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = '' ;

  constructor(
        private route: ActivatedRoute,
        private ofertasService: OfertaService
    ) { }

  ngOnInit() {

    this.route.parent.params.subscribe((parametros: Params) => {
        this.ofertasService.getOndeFicaOfertaPorId(parametros.id)
        .then((descricao: string) =>{
          this.ondeFica = descricao;
        });
    });    
  }
}