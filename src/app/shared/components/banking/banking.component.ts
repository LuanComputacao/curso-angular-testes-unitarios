import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})
export class BankingComponent implements OnInit {

  private _poupanca: number;
  private _carteira: number;

  constructor() {
    this._poupanca = 10
    this._carteira = 50
  }

  get carteira(): number {
    return this._carteira;
  }

  set carteira(value: number) {
    this._carteira = value;
  }
  get poupanca(): number {
    return this._poupanca;
  }

  set poupanca(value: number) {
    this._poupanca = value;
  }


  ngOnInit(): void {
  }

  sacar(value: string): boolean {
    const sacar = Number(value)
    if (isNaN(sacar) || sacar < 0) {
      return false;
    }
    this.poupanca -= sacar
    this.carteira += sacar

    return true;
  }

  depositar(value:string): boolean {
    const deposito = Number(value)
    if (isNaN(deposito) || deposito < 0) {
      return false;
    }

    this.poupanca += deposito
    this.carteira -= deposito
    return true;
  }
}
