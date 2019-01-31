import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Pedido } from '../shared/pedido.model'
import { OrdemcompraService } from '../ordem-compra-service';
import { pipe } from '@angular/core/src/render3/pipe';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemcompraService ]
})
export class OrdemCompraComponent implements OnInit {
  
  public idPedidoCompra: number;

  @ViewChild('formulario') public formulario: NgForm;

  constructor(private ordemCompraService: OrdemcompraService) { }

  ngOnInit() {
    
  }

  public confirmarCompra(): void {
      
     let pedido: Pedido = new Pedido(
       this.formulario.value.endereco,                                     
       this.formulario.value.numero,                                     
       this.formulario.value.complemento,       
       this.formulario.value.formaPagamento);

     this.ordemCompraService.efetivarCompra(pedido)
     .subscribe((idPedido: number) => {
       this.idPedidoCompra = idPedido;
     });
  }
}
