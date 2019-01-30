import { Component, OnInit } from '@angular/core';
import { OrdemcompraService } from '../ordem-compra-service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemcompraService ]
})
export class OrdemCompraComponent implements OnInit {

  
  public idPedidoCompra: number;


  public endereco:       string = '';
  public numero:         string = '';
  public complemento:    string = '';
  public formaPagamento: string = '';

//controle de validação dos campos

public enderecoValido:       boolean;
public numeroValido:         boolean;
public complementoValido:    boolean;
public formaPagamentoValido: boolean;

// estados primitivos dos campos (pristine)
public enderecoEstadoPrimitivo:       boolean = true;
public numeroEstadoPrimitivo:         boolean = true;
public complementoEstadoPrimitivo:    boolean = true;
public formaPagamentoEstadoPrimitivo: boolean = true;

//Pedido
public pedido: Pedido = new Pedido('','','','');

  constructor(private ordemCompraService: OrdemcompraService) { }

  ngOnInit() {
    
  }

  public atualizaEndereco(endereco: string): void {
      this.endereco = endereco;
      
      this.enderecoEstadoPrimitivo = false;

      if(this.endereco.length > 3) {
        this.enderecoValido = true;
      }else { 
        this.enderecoValido = false;
      }          
  }

  public atualizarNumero(numero: string): void {
    this.numero = numero;
     
    this.numeroEstadoPrimitivo = false;

    if(this.numero.length > 0) {
      this.numeroValido = true;
    }else {
      this.numeroValido = false;
    }
  }

  public atualuzaComplemento(complemento: string): void {
    this.complemento = complemento;

    this.complementoEstadoPrimitivo = false;

    if(this.complemento.length > 0) {
      this.complementoValido = true;
    }
  }

  public atulizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento;

    this.formaPagamentoEstadoPrimitivo = false;

    if(this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true;
    }else {
      this.formaPagamentoValido = false;
    }
  }

  public confirmarCompra(): void {
    this.pedido.endereco = this.endereco;
    this.pedido.numero = this.numero;
    this.pedido.complemento = this.complemento;
    this.pedido.formaPagamento = this.formaPagamento;

    this.ordemCompraService.efetivarCompra(this.pedido)
    .subscribe((idPedido: number) => {
      this.idPedidoCompra = idPedido;
    });
  }

}