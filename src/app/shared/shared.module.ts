import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BankingComponent} from './components/banking/banking.component';
import {ListComponent} from './components/investments/list/list.component';
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from './pages/home/home.component';
import {AccountComponent} from './pages/account/account.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    BankingComponent,
    ListComponent,
    HomeComponent,
    AccountComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    BankingComponent,
    CommonModule
  ]
})
export class SharedModule { }
