import { Component, OnInit } from '@angular/core';
 
import { Pedido } from '../shared/pedido.model'
import { OrdemcompraService } from '../ordem-compra-service';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemcompraService ]
})
export class OrdemCompraComponent implements OnInit {

  constructor(private ordemCompraService: OrdemcompraService) { }

  ngOnInit() {
    
  }

  public confirmarCompra(): void {
  }
}
