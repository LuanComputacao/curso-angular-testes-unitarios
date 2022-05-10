import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ListInvestmentsService} from "../../../services/list-investments.service";
import {Investment} from "../../../models/investment";
import { MOCK_LIST } from 'src/app/shared/services/mocks/list-investments.mock';
import {of} from "rxjs";

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: ListInvestmentsService;

  const mockList : Array<Investment> = MOCK_LIST;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    service = TestBed.inject(ListInvestmentsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) should list financial assets', () => {
    let assets = component.assets
    // expect(assets.length).toBe(3)
    spyOn(service, 'list').and.returnValue(of(mockList))
    component.ngOnInit();
    fixture.detectChanges();

    expect(service.list).toHaveBeenCalledWith();
    expect(component.assets.length).toBe(5)
  })

  it('(I) should list financial assets', () => {
    spyOn(service, 'list').and.returnValue(of(mockList))
    component.ngOnInit();
    fixture.detectChanges()

    let assets = fixture.debugElement.nativeElement.querySelectorAll('.list-item')

    expect(assets.length).toBe(5)
  })
});
