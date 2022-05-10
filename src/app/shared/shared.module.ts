import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankingComponent } from './components/banking/banking.component';
import { ListComponent } from './components/investments/list/list.component';



@NgModule({
  declarations: [
    BankingComponent,
    ListComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BankingComponent,
    CommonModule
  ]
})
export class SharedModule { }
