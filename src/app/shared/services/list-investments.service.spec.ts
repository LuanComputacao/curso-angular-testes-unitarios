import {TestBed} from '@angular/core/testing';

import {ListInvestmentsService} from './list-investments.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClient} from '@angular/common/http';
import {Investment} from "../models/investment";
import {MOCK_LIST} from "./mocks/list-investments.mock";

describe('ListInvestmentsService', () => {
  let service: ListInvestmentsService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  const URL: string = "https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json"

  const mockList: Array<Investment> = MOCK_LIST;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ListInvestmentsService);
  });

  afterEach(() => {
    httpTestingController.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('(U) should list all investments', (done) => {
    service.list().subscribe(
      (res: Array<Investment>) => {
        expect(res[0].name).toEqual('Banco1')
        done();
      }
    )

    const req = httpTestingController.expectOne(URL);
    req.flush(mockList)

    expect(req.request.method).toEqual('GET');
  });
});
