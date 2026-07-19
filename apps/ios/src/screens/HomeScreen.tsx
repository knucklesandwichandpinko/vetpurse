import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { colors, spacing, cardShadow } from '../theme/colors';
import { useInventory } from '../data/InventoryContext';
import { Feather } from '@expo/vector-icons';

export default function HomeScreen() {
  const { lots } = useInventory();
  const lowStock = lots.filter((l) => l.status === 'low').length;
  const expiring = lots.filter((l) => l.status === 'expiring').length;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: spacing.lg }}>
      <View style={styles.metricRow}>
        <View style={styles.metricCard}>
          <View style={[styles.iconChip, { backgroundColor: '#fcebeb' }]}>
            <Feather name="package" size={15} color={colors.danger} />
          </View>
          <Text style={styles.metricValue}>{lowStock}</Text>
          <Text style={styles.metricLabel}>Low stock</Text>
        </View>
        <View style={styles.metricCard}>
          <View style={[styles.iconChip, { backgroundColor: '#faeeda' }]}>
            <Feather name="clock" size={15} color={colors.warn} />
          </View>
          <Text style={styles.metricValue}>{expiring}</Text>
          <Text style={styles.metricLabel}>Expiring soon</Text>
        </View>
      </View>

      <Text style={styles.sectionLabel}>Recent activity</Text>
      <View style={styles.card}>
        <ActivityRow text="Scanned out HT5 Chem (CHM-8801)" time="9:14 AM" />
        <ActivityRow text="Registered new lot EPC-1190" time="Yesterday" />
        <ActivityRow text="Scanned out Element i+ Lyte Cartridge" time="Yesterday" last />
      </View>
    </ScrollView>
  );
}

function ActivityRow({ text, time, last }: { text: string; time: string; last?: boolean }) {
  return (
    <View style={[styles.activityRow, !last && styles.rowBorder]}>
      <Text style={styles.activityText}>{text}</Text>
      <Text style={styles.activityTime}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.cream },
  metricRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.lg },
  metricCard: { flex: 1, backgroundColor: colors.white, borderRadius: 14, padding: spacing.md, ...cardShadow },
  iconChip: { width: 28, height: 28, borderRadius: 8, alignItems: 'center', justifyContent: 'center', marginBottom: 8 },
  metricValue: { fontSize: 22, fontWeight: '700', color: colors.ink },
  metricLabel: { fontSize: 12, color: colors.sage },
  sectionLabel: { fontSize: 11, color: colors.sage, marginBottom: spacing.sm, textTransform: 'uppercase', letterSpacing: 0.5, fontWeight: '600' },
  card: { backgroundColor: colors.white, borderRadius: 14, paddingHorizontal: spacing.md, ...cardShadow },
  activityRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12 },
  rowBorder: { borderBottomWidth: 0.5, borderBottomColor: colors.border },
  activityText: { fontSize: 13, color: colors.ink, flex: 1, marginRight: 8 },
  activityTime: { fontSize: 11, color: colors.sage },
});
