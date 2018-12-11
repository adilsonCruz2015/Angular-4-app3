import { Component, OnInit } from '@angular/core';

import { OfertaService } from './../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ OfertaService]
})
export class HomeComponent implements OnInit {
 
  public ofertas: Oferta[];

  constructor(private ofertasService: OfertaService) {  }

  ngOnInit() { 
    this.ofertasService.getOfertas()
    .then((ofertas: Oferta[]) => {
      this.ofertas = ofertas;
    })
    .catch((param: any) => { console.log(param); });
  }

}
