import { Injectable } from '@angular/core';
import { Transaction } from './models/transaction';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public transactions: Transaction[] = []
  constructor() { }

  public addTransaction(tran: Transaction) {
    this.transactions.push(tran)
  }

  public getTransaction() {
    return this.transactions;
  }

  private setLocal(transactions: Transaction[]){
    localStorage.setItem('transactions', JSON.stringify(transactions))
  }

  private getLocal() {
    const trans = localStorage.getItem("transactions")
    if (trans) {
      return JSON.parse(trans) as Transaction[];
    } else {
      this.setLocal([])
      return[]
    }
  }


}
