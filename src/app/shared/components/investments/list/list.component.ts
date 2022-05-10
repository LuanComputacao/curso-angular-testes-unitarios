import { Component, OnInit } from '@angular/core';
import {Investment} from "../../../models/investment";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public assets: Array<Investment> = [
    {
      name: 'Oi Br',
      value: 0.70
    },
    {
      name: 'Itausa',
      value: 13
    },
    {
      name: 'Petrobras',
      value: 21
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
