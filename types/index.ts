export interface Transaction {
  date: string;
  name: string;
  price: number;
  type: string;
  icon: string;
}

export interface TransactionForm {
  name: string;
  price: number;
  type: string;
  icon: string;
}

export type TransactionType = 'Food' | 'Shopping' | 'Transport' | 'Entertainment' | 'Health' | 'Education';

export const TRANSACTION_TYPES: TransactionType[] = [
  'Food',
  'Shopping',
  'Transport',
  'Entertainment',
  'Health',
  'Education',
];