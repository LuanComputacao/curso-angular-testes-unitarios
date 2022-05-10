import { HttpClientTestingModule } from '@angular/common/http/testing';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import { ListComponent } from '../investments/list/list.component';

import {BankingComponent} from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankingComponent, ListComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) poupanca should have 10', () => {
    expect(component.poupanca).toEqual(10)
  })

  it('(U) poupanca should have 50', () => {
    expect(component.carteira).toEqual(50)
  })

  it('(U) should transfer from poupanca to carteira', () => {
    component.sacar('10')

    expect(component.poupanca).toEqual(0)
    expect(component.carteira).toEqual(60)
  })

  it('(U) should transfer from carteira to poupanca', () => {
    component.depositar('10')

    expect(component.poupanca).toEqual(20)
    expect(component.carteira).toEqual(40)
  })

  it('(U) saque should not accept negative amounts', () => {
    component.sacar('-1')
    expect(component.poupanca).toEqual(10)
    expect(component.carteira).toEqual(50)
  })

  it('(U) deposito should not accept negative amounts', () => {
    component.depositar('-1')
    expect(component.poupanca).toEqual(10)
    expect(component.carteira).toEqual(50)
  })

  it('(U) sacar should not accept not number strings isNaN', () => {
    expect(component.sacar('string')).toBeFalsy()
    expect(component.sacar('0')).toBeTruthy()
  })

  it('(U) depositar should not accept not number strings isNaN', () => {
    expect(component.depositar('string')).toBeFalsy()
    expect(component.depositar('0')).toBeTruthy()
  })


  it('(I) should transfer from carteira to poupanca', () => {
    let el = fixture.debugElement.nativeElement

    el.querySelector('#depositar-input').value = 10
    el.querySelector('#depositar').click()
    fixture.detectChanges()

    expect(component.poupanca).toEqual(20)
    expect(el.querySelector('#poupanca-show').textContent).toEqual('20')

    expect(component.carteira).toEqual(40)
    expect(el.querySelector('#carteira-show').textContent).toEqual('40')
  })

  it('(I) should transfer from poupanca to carteira', () => {
    let el = fixture.debugElement.nativeElement

    el.querySelector('#sacar-input').value = 10
    el.querySelector('#sacar').click()
    fixture.detectChanges()

    expect(component.carteira).toEqual(60)
    expect(el.querySelector('#carteira-show').textContent).toEqual('60')

    expect(component.poupanca).toEqual(0)
    expect(el.querySelector('#poupanca-show').textContent).toEqual('0')

  })

});


