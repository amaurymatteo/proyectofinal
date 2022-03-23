import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { BudgetService } from 'src/app/budget/services/budget.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    console.log(this.appService.getTransaction())
  }

}
