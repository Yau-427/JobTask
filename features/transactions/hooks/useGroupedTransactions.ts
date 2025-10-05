import { useMemo } from 'react';
import { useTransactions } from '../context/TransactionContext';
import { Transaction } from '@/types';

export const useGroupedTransactions = () => {
  const { transactions } = useTransactions();

  return useMemo(() => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const groups: Record<string, Transaction[]> = {};

    transactions.forEach((t: Transaction) => {
      const d = new Date(t.date);
      let key: string;
      if (d.toDateString() === today.toDateString()) key = 'Today';
      else if (d.toDateString() === yesterday.toDateString()) key = 'Yesterday';
      else key = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      if (!groups[key]) groups[key] = [];
      groups[key].push(t);
    });

    return groups;
  }, [transactions]);
};