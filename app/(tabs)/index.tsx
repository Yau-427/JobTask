import { ScrollView } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import HomePanelButtons from '@/components/HomePanelButtons';
import CardComponent from '@/components/CardComponent';
import Expenses from '@/components/Expenses';
import History from '@/components/History';

export default function HomeScreen() {
    return (
        <ScrollView>
            <ThemedView>
                <ThemedView style={{ paddingHorizontal: 16 }}>
                    <HomePanelButtons />
                </ThemedView>
                <CardComponent />
                <Expenses />
                <History />
            </ThemedView>
        </ScrollView>
    );
}