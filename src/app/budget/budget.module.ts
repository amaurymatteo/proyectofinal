import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense/expense.component';
import { EntryComponent } from './entry/entry.component';
import { RouterModule, Routes } from '@angular/router';
import { BudgetService } from './services/budget.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'expense', component: ExpenseComponent,
  },
  {
    path: 'entry', component: EntryComponent,
  },
  {
    path: '**', redirectTo: 'entry',
  }
]

@NgModule({
  declarations: [
    ExpenseComponent,
    EntryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BudgetService
  ]
})
export class BudgetModule { }
