import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { Transaction } from 'src/app/models/transaction';
import { Type } from 'src/app/models/type';
import { Types } from 'src/app/models/types';

@Injectable()
export class BudgetService {
  public form:FormGroup;
  public types: Type[] = [
    {
      name: "Transporte", type: Types.OUTCOME
    },
    {
      name: "Cobro Nomina", type: Types.OUTCOME
    },
    {
      name: "Salario", type: Types.INCOME
    },
    {
      name: "Venta de Computadoras", type: Types.INCOME
    }
  ]

  constructor(private formBuider: FormBuilder, private appService: AppService) { 
    this.form = this.formBuider.group({
      amount: ['', [Validators.required, Validators.min(10)]],
      date: [''],
      type: ['']
    });
  }

  public saveTransaction() {
    // this.form.get('type')?.setValue(type)
    if (this.form.valid) {
      const tran: Transaction = {
        id: this.getId(),
        amount: this.form.get("amount")?.value,
        date: this.form.get("date")?.value,
        type: this.form.get("type")?.value
      };
  
      this.appService.addTransaction(tran);
    }
    else{
      this.form.markAllAsTouched()
    }
  }

  public getTypes(type: Types): Type[] {
    return this.types.filter( t => t.type === type)
  }

  // private addTransaction(transaction: Transaction) {
  //   this.transactions.push(transaction)
  // }

  private getId(): string {
    return Math.random().toString().substr(2);
  }

  get amount() {
    return this.form.get("amount")
  }

  get date() {
    return this.form.get("date")
  }

  get type() {
    return this.form.get("type")
  }
}
