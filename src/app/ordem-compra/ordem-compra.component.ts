import { Component, OnInit } from '@angular/core';

import { Pedido } from '../shared/pedido.model'
import { OrdemCompraService } from '../ordem-compra-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CarrinhoService } from '../carrinho.service';


@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService, CarrinhoService ]
})
export class OrdemCompraComponent implements OnInit {

  formulario: FormGroup;
  public IdPedidoCompra: number;
  
  constructor(private ordemCompraService: OrdemCompraService,
              private formBuilder: FormBuilder,
              private carrinhoService: CarrinhoService) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      endereco       : new FormControl(null,  [ Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
      numero         : new FormControl(null,  [ Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
      complemento    : new FormControl(null),
      formaPagamento : new FormControl(null,  [ Validators.required])
    });

    console.log('Array de Itens' + this.carrinhoService.exibirItens());

  }  

  public confirmarCompra(): void {

    const _endereco = this.formulario.value.endereco;
    const _numero   = this.formulario.value.numero;
    const _complemento = this.formulario.value.complemento;
    const _formaPagamento = this.formulario.value.formaPagamento;

    if(this.formulario.status === 'INVALID'){

    }
    else{
      let pedido: Pedido = new Pedido(_endereco, _numero, _complemento, _formaPagamento);

      this.ordemCompraService.efetivarCompra(pedido)
      .subscribe((idPedido: number) => {
         this.IdPedidoCompra = idPedido;
      });

    }
    
  }

  onReset(): void {
    this.formulario.reset();
  }

}
