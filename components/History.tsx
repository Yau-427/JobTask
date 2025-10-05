import { View, Image } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { useGroupedTransactions } from '@/features/transactions/hooks/useGroupedTransactions';
import { Transaction, TransactionType } from '@/types';

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

const History = () => {
    const groups = useGroupedTransactions();

    return (
        <ThemedView style={{ paddingHorizontal: 16, marginTop: 20 }}>

            {Object.keys(groups).map((date: string) => (
                <View key={date} style={{ marginBottom: 20 }}>
                    <ThemedText style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>{date}</ThemedText>
                    {groups[date].map((t: Transaction, i: number) => (
                        <View key={i} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4, padding: 16, backgroundColor: '#0F0F0F', borderRadius: 16 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: '#f0f0f0', justifyContent: 'center', alignItems: 'center', marginRight: 12 }}>
                                    {t.icon && (t.icon.startsWith('file://') || t.icon.startsWith('http') || t.icon.startsWith('data:')) ? (
                                        <Image source={{ uri: t.icon }} style={{ width: 40, height: 40, borderRadius: 12 }} />
                                    ) : (
                                        <ThemedText style={{ fontSize: 18 }}>{t.icon || '💳'}</ThemedText>
                                    )}
                                </View>
                                <View>
                                    <ThemedText style={{ fontSize: 14, fontWeight: '500' }}>{t.name}</ThemedText>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: getColorForType(t.type as TransactionType), marginRight: 4 }} />
                                        <ThemedText style={{ fontSize: 12, fontWeight: '400', color: '#B3B3B3' }}>{t.type}</ThemedText>
                                    </View>
                                </View>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <ThemedText style={{ fontSize: 14, fontWeight: '500' }}>${t.price.toFixed(2)}</ThemedText>
                                <ThemedText style={{ fontSize: 12, fontWeight: '400', color: '#B3B3B3' }}>{(() => {
                                    const date = new Date(t.date);
                                    const month = date.toLocaleDateString('en-US', { month: 'short' });
                                    const day = date.getDate();
                                    const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
                                    return `${month} ${day}, ${time}`;
                                })()}</ThemedText>
                            </View>
                        </View>
                    ))}
                </View>
            ))}
        </ThemedView>
    );
};

export default History;