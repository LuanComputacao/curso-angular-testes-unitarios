import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {Investment} from "../models/investment";

@Injectable({
  providedIn: 'root'
})
export class ListInvestmentsService {

  private url: string = "https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json"

  constructor(
    private http: HttpClient
  ) {
  }

  public list(): Observable<Array<Investment>> {
    return this.http.get<Array<Investment>>(this.url)
      .pipe(
        map( res => res)
      )
  }

}
