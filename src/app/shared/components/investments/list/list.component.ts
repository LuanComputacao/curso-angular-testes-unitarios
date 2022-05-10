import {Component, OnInit} from '@angular/core';
import {Investment} from "../../../models/investment";
import {ListInvestmentsService} from "../../../services/list-investments.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public assets!: Array<Investment> ;


  constructor(private listInvestmentService: ListInvestmentsService) {
  }

  ngOnInit(): void {
    this.listInvestmentService.list()
      .subscribe(
        res => this.assets = res
      )
  }

}
