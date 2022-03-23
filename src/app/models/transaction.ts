import { Type } from "./type";


export interface Transaction {
    id: string;
    amount: number;
    date: Date;
    type: Type;
}