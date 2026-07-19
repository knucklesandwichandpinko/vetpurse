import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { colors, spacing, cardShadow } from '../theme/colors';
import { burnRate14d, analyzerUsage } from '../data/mockData';
import { Feather } from '@expo/vector-icons';

export default function AnalyticsScreen() {
  const maxBar = Math.max(...burnRate14d);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: spacing.lg }}>
      <View style={styles.metricRow}>
        <View style={styles.metricCard}>
          <View style={[styles.iconChip, { backgroundColor: '#e1f5ee' }]}>
            <Feather name="activity" size={15} color={colors.mintDim} />
          </View>
          <Text style={styles.metricValue}>1,240</Text>
          <Text style={styles.metricLabel}>Tests this month</Text>
        </View>
        <View style={styles.metricCard}>
          <View style={[styles.iconChip, { backgroundColor: '#eef5f3' }]}>
            <Feather name="trending-down" size={15} color={colors.tealDeep} />
          </View>
          <Text style={styles.metricValue}>$2,300</Text>
          <Text style={styles.metricLabel}>Waste prevented</Text>
        </View>
      </View>

      <Text style={styles.sectionLabel}>Burn rate — last 14 days</Text>
      <View style={styles.card}>
        <View style={styles.chartRow}>
          {burnRate14d.map((v, i) => (
            <View
              key={i}
              style={[
                styles.bar,
                {
                  height: (v / maxBar) * 70,
                  backgroundColor: i === burnRate14d.length - 1 ? colors.tealDeep : colors.mint,
                },
              ]}
            />
          ))}
        </View>
        <View style={styles.chartLabels}>
          <Text style={styles.chartLabelText}>14d ago</Text>
          <Text style={styles.chartLabelText}>Today</Text>
        </View>
      </View>

      <Text style={styles.sectionLabel}>Usage by analyzer</Text>
      <View style={styles.card}>
        {analyzerUsage.map((a) => (
          <View key={a.name} style={styles.analyzerRow}>
            <View style={styles.analyzerHeader}>
              <Text style={styles.analyzerName}>{a.name}</Text>
              <Text style={styles.analyzerPct}>{a.pct}%</Text>
            </View>
            <View style={styles.track}>
              <View style={[styles.fill, { width: `${a.pct}%` }]} />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.cream },
  metricRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.lg },
  metricCard: { flex: 1, backgroundColor: colors.white, borderRadius: 14, padding: spacing.md, ...cardShadow },
  iconChip: { width: 28, height: 28, borderRadius: 8, alignItems: 'center', justifyContent: 'center', marginBottom: 8 },
  metricValue: { fontSize: 19, fontWeight: '700', color: colors.ink },
  metricLabel: { fontSize: 11, color: colors.sage },
  sectionLabel: { fontSize: 11, color: colors.sage, textTransform: 'uppercase', letterSpacing: 0.5, fontWeight: '600', marginTop: spacing.md, marginBottom: spacing.sm },
  card: { backgroundColor: colors.white, borderRadius: 14, padding: spacing.md, ...cardShadow },
  chartRow: { flexDirection: 'row', alignItems: 'flex-end', gap: 4, height: 76 },
  bar: { flex: 1, borderRadius: 3, minHeight: 4 },
  chartLabels: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 },
  chartLabelText: { fontSize: 10, color: colors.sage },
  analyzerRow: { marginBottom: spacing.sm },
  analyzerHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  analyzerName: { fontSize: 12.5, fontWeight: '500', color: colors.ink },
  analyzerPct: { fontSize: 12.5, color: colors.sage },
  track: { height: 8, backgroundColor: colors.cream, borderRadius: 4, overflow: 'hidden' },
  fill: { height: '100%', backgroundColor: colors.tealDeep, borderRadius: 4 },
});
