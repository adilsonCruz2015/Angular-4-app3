import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { OfertaService } from '../../ofertas.service';



@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertaService ]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = '';

  constructor(
      private route: ActivatedRoute,
      private ofertasService: OfertaService
      ) { }

  ngOnInit() {   
    
    this.route.parent.params.subscribe((parametros: Params) => {
       
      this.ofertasService.getComoUsarOfertPorId(parametros.id)
      .then((descricao: string) =>{ 
        this.comoUsar = descricao;
      });
    });    
  }
}