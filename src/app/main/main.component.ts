import { Component, OnInit } from '@angular/core';
import { ContaService } from '../services/conta.service';
import { MatSnackBar } from  '@angular/material/snack-bar' ;
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  imagemLateralUrl = '../../assets/images/imagem-lateral.svg';
  nome = 'João Vitor Lima Lago Santos';
  saldo= '';

  form = {
    valor: '',
  }

  private id = '';

  constructor(private contaService: ContaService, private snackBar: MatSnackBar, private clienteService: ClienteService) {}

  private formatarSaldo(saldo: number): string {
    return saldo.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    });
  }

  private formatarValorInput(valor: string): number {
    if(this.form.valor.includes(',')) {
      return Number(this.form.valor.replace(',', '.'));
    } else {
      return Number(this.form.valor);
    }
  }

  private exibirMensagem(mensagem: string) {
    this.snackBar.open(mensagem, undefined, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    })
  }

  ngOnInit(): void {
    this.clienteService.buscaCliente('01')
      .subscribe(cliente => {
        this.id = cliente.id;

        this.contaService.buscaSaldo(cliente.id)
          .subscribe(valor => this.saldo = this.formatarSaldo(valor));
      });
  }

  realizarSaque() {
    let valor = this.formatarValorInput(this.form.valor);

    if(valor == 0) {
      this.exibirMensagem('Informe um valor para realizar a operação');
    } else {
      this.contaService.realizaSaque(this.id, Number(valor))
      .subscribe(valor => {
        if(valor.error) {
          this.exibirMensagem(valor.error.message);
        } else {
          this.exibirMensagem('Valor retirado com sucesso!');
          this.saldo = this.formatarSaldo(valor as number);
        }
      })
    }
  }

  realizarDeposito() {
    let valor = this.formatarValorInput(this.form.valor);

    if(valor == 0) {
      this.exibirMensagem('Informe um valor para realizar a operação');
    } else {
      this.contaService.realizaDeposito(this.id, Number(valor))
      .subscribe(valor => {
        this.exibirMensagem('Valor depositado com sucesso!');
        this.saldo = this.formatarSaldo(valor);
      });
    }
  }
}
