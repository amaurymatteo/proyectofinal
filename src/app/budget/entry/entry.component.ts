import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Type } from 'src/app/models/type';
import { Types } from 'src/app/models/types';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  public types: Type[] = [];
  constructor(private appService: AppService, public budgetService: BudgetService ) { }

  ngOnInit(): void {
    this.types = this.budgetService.getTypes(Types.INCOME)
  }

  save(){
    this.budgetService.saveTransaction()
  }
}
