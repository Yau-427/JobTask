import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';

export default function AnalyticsScreen() {
  return (
    <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ThemedText type="title">Analytics</ThemedText>
    </ThemedView>
  );
}