import { useMemo } from 'react';
import { useTransactions } from '../context/TransactionContext';
import { TransactionType } from '@/types';

export const useMonthlyExpenses = () => {
  const { transactions } = useTransactions();

  return useMemo(() => {
    const currentMonth = new Date().toLocaleDateString('en-US', { month: 'long' });
    const currentYear = new Date().getFullYear();

    const monthlyTransactions = transactions.filter(t => {
      const d = new Date(t.date);
      return d.getMonth() === new Date().getMonth() && d.getFullYear() === currentYear;
    });

    const totalExpenses = monthlyTransactions.reduce((sum, t) => sum + t.price, 0);

    const typeTotals: Record<TransactionType, number> = {
      Food: 0,
      Shopping: 0,
      Transport: 0,
      Entertainment: 0,
      Health: 0,
      Education: 0,
    };

    monthlyTransactions.forEach(t => {
      if (typeTotals[t.type as TransactionType] !== undefined) {
        typeTotals[t.type as TransactionType] += t.price;
      }
    });

    const sortedTypes = Object.keys(typeTotals).sort((a, b) => typeTotals[b as TransactionType] - typeTotals[a as TransactionType]) as TransactionType[];

    return {
      currentMonth,
      totalExpenses,
      typeTotals,
      sortedTypes,
      monthlyTransactions,
    };
  }, [transactions]);
};