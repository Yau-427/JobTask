import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useTransactions } from '../../transactions/context/TransactionContext';
import { useImagePicker } from './useImagePicker';
import { TransactionForm, Transaction, TransactionType, TRANSACTION_TYPES } from '@/types';

export const usePaymentForm = () => {
  const { addTransaction } = useTransactions();
  const { imageUri, pickImage, clearImage } = useImagePicker();
  const [form, setForm] = useState<TransactionForm>({
    name: '',
    price: 0,
    type: '',
    icon: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateForm = (updates: Partial<TransactionForm>) => {
    setForm(prev => ({ ...prev, ...updates }));
  };

  // Sync imageUri with form
  useEffect(() => {
    updateForm({ icon: imageUri });
  }, [imageUri]);

  const validateForm = (): boolean => {
    if (!form.name.trim()) {
      Alert.alert('Error', 'Please enter transaction name');
      return false;
    }
    if (form.price <= 0) {
      Alert.alert('Error', 'Price must be greater than 0');
      return false;
    }
    if (!form.type) {
      Alert.alert('Error', 'Please select transaction type');
      return false;
    }
    return true;
  };

  const submitForm = async () => {
    if (!validateForm()) return false;

    setIsSubmitting(true);
    try {
      const transaction: Transaction = {
        date: new Date().toISOString(),
        ...form,
      };
      addTransaction(transaction);
      // Reset form
      setForm({ name: '', price: 0, type: '', icon: '' });
      return true;
    } catch (error) {
      Alert.alert('Error', 'Failed to add transaction');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    updateForm,
    pickImage,
    clearImage,
    imageUri,
    submitForm,
    isSubmitting,
    transactionTypes: TRANSACTION_TYPES,
  };
};