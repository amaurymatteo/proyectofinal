import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Type } from 'src/app/models/type';
import { Types } from 'src/app/models/types';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  public types: Type[] = [];
  constructor(private appService: AppService, public budgetService: BudgetService ) { }

  ngOnInit(): void {
    this.types = this.budgetService.getTypes(Types.OUTCOME)
  }

  save(){
    this.budgetService.saveTransaction()
  }

}
