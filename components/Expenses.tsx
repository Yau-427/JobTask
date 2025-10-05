import { View } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { useMonthlyExpenses } from '@/features/transactions/hooks/useMonthlyExpenses';
import { TransactionType } from '@/types';

const getColorForType = (type: TransactionType): string => {
    switch (type) {
        case 'Food': return '#CC3F02';
        case 'Shopping': return '#FE5900';
        case 'Transport': return '#FF9332';
        case 'Entertainment': return '#FFD8A5';
        case 'Health': return '#FFA500';
        case 'Education': return '#FFD700';
        default: return '#CC3F02';
    }
};

const Expenses = () => {
    const { currentMonth, totalExpenses, typeTotals, sortedTypes } = useMonthlyExpenses();

    return (
        <ThemedView style={{ paddingHorizontal: 16, marginTop: 20, flexDirection: 'column', gap: 16 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    <ThemedText style={{ fontSize: 21 }}>Expenses in </ThemedText>
                    <ThemedText style={{ fontSize: 21, color: '#FE5900' }}>{currentMonth}</ThemedText>
                </View>
                <ThemedText style={{ fontSize: 18, color: '#AEAEAE' }}>${totalExpenses.toFixed(2)}</ThemedText>
            </View>
            <View style={{ height: 8, flexDirection: 'row' }}>
                {sortedTypes.map((type, index) => {
                    const percentage = typeTotals[type] / totalExpenses;
                    return (
                        <View
                            key={type}
                            style={{
                                flex: percentage,
                                backgroundColor: getColorForType(type),
                                borderRadius: 3,
                                marginRight: index < sortedTypes.length - 1 ? 2 : 0
                            }}
                        />
                    );
                })}
            </View>
        </ThemedView>
    );
};

export default Expenses;