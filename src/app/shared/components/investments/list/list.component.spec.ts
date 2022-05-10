import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) should list financial assets', () => {
    let assets = component.assets
    expect(assets.length).toBe(3)
  })

  it('(I) should list financial assets', () => {
    let assets = fixture.debugElement.nativeElement.querySelectorAll('.list-item')
    fixture.detectChanges()

    expect(assets.length).toBe(3)
  })
});
