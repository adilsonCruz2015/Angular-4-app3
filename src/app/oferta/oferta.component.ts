import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params }    from '@angular/router';
import { Observable, Observer, Subscription } from 'rxjs';
import { interval } from 'rxjs'

import { OfertaService } from './../ofertas.service';
import { Oferta } from './../shared/oferta.model';
import { CarrinhoService } from '../carrinho.service';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers:[ OfertaService, CarrinhoService ]
})
export class OfertaComponent implements OnInit, OnDestroy { 
  
  public oferta: Oferta;

  constructor(
              private route: ActivatedRoute,
              private ofertasService: OfertaService,
              private carrinhoService: CarrinhoService) { }

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

  public adicionarItemCarrinho() : void {
     this.carrinhoService.incluirItem(this.oferta);  
     console.log(this.carrinhoService.exibirItens());  
  }

}
