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
    { date: '2025-10-05T12:08:00', name: 'Starbucks', price: 122.47, type: 'Food', icon: 'https://images.steamusercontent.com/ugc/2235535765174305731/C6D8873027B0B53BCAE352A33F1AA92DF0C05055/' },
    { date: '2025-10-05T10:30:00', name: 'Amazon', price: 50.00, type: 'Shopping', icon: 'https://i0.wp.com/upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png?ssl=1' },
    { date: '2025-10-04T15:45:00', name: 'Uber', price: 25.50, type: 'Transport', icon: 'https://i.pinimg.com/originals/04/b7/fc/04b7fc869a8ddb0b248cb0015de8ab03.jpg' },
    { date: '2025-10-03T09:20:00', name: 'Grocery Store', price: 75.30, type: 'Food', icon: 'https://img.freepik.com/premium-vector/creative-grocery-store-logo-with-shop-basket-design-concept-vector-illustration-symbol-icon_606011-3201.jpg' },
    { date: '2025-10-03T14:10:00', name: 'Cinema', price: 40.00, type: 'Entertainment', icon: 'https://yt3.googleusercontent.com/ytc/AIdro_nqYSw1Okkii1XuyOX0YwthRY0PyL-QHL2NxeyTXwByNg=s900-c-k-c0x00ffffff-no-rj' },
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