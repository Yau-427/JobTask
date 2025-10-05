import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Transaction } from '@/types';

interface TransactionContextType {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
}

const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

export const useTransactions = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error('useTransactions must be used within a TransactionProvider');
  }
  return context;
};

export const TransactionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { date: '2025-10-05T12:08:00', name: 'Starbucks', price: 122.47, type: 'Food', icon: '' },
    { date: '2025-10-05T10:30:00', name: 'Amazon', price: 50.00, type: 'Shopping', icon: '' },
    { date: '2025-10-04T15:45:00', name: 'Uber', price: 25.50, type: 'Transport', icon: '' },
    { date: '2025-10-03T09:20:00', name: 'Grocery Store', price: 75.30, type: 'Food', icon: '' },
    { date: '2025-10-03T14:10:00', name: 'Cinema', price: 40.00, type: 'Entertainment', icon: '' },
  ]);

  const addTransaction = (transaction: Transaction) => {
    setTransactions(prev => [...prev, transaction]);
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};