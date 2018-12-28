import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params }    from '@angular/router';
import { Observable, Observer, Subscription } from 'rxjs';
import { interval } from 'rxjs'

import { OfertaService } from './../ofertas.service';
import { Oferta } from './../shared/oferta.model';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers:[ OfertaService ]
})
export class OfertaComponent implements OnInit, OnDestroy { 
  
  public oferta: Oferta;

  constructor(
              private route: ActivatedRoute,
              private ofertasService: OfertaService) { }

  ngOnInit() { 
      
     this.route.params.subscribe((paramentos: Params) =>{
      
        this.ofertasService.getOfertasPorId(paramentos.id)
        .then((oferta: Oferta) => {
          this.oferta = oferta;
        });         
     });

    
      
  }

  ngOnDestroy(){
      
  }

}
