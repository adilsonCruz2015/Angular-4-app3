import { Component, OnInit } from '@angular/core';

import { Pedido } from '../shared/pedido.model'
import { OrdemCompraService } from '../ordem-compra-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  formulario: FormGroup;

  /*public formulario: FormGroup = new FormGroup({
    'endereco':       new FormControl(null, [ Validators.required, Validators.minLength(3), Validators.maxLength(120) ]),
    'numero':         new FormControl(null, [ Validators.required, Validators.minLength(1), Validators.maxLength(20) ]),
    'complemento':    new FormControl(null),
    'formaPagamento': new FormControl(null, [ Validators.required ] )
  });*/
  constructor(private ordemCompraService: OrdemCompraService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      endereco       : new FormControl(null,  [ Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
      numero         : new FormControl(null,  [ Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
      complemento    : new FormControl(null),
      formaPagamento : new FormControl(null,  [ Validators.required])
    });

  }  

  public confirmarCompra(): void {
    //console.log(this.formulario);

    const _endereco = this.formulario.value.endereco;
    const _numero   = this.formulario.value.numero;
    const _complemento = this.formulario.value.complemento;
    const _formaPagamento = this.formulario.value.formaPagamento;

    console.log("O endereco é : " + _endereco + "\n");
    console.log("O Número é : " + _numero + "\n");
    console.log("O complemento é : " + _complemento);
    console.log("A forma de pagamento é : " + _formaPagamento);
  }

  onReset(): void {
    this.formulario.reset();
  }

}
