import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { LotStatus } from '../data/mockData';

const meta: Record<LotStatus, { label: string; bg: string; fg: string }> = {
  ok: { label: 'In stock', bg: '#e1f5ee', fg: colors.mintDim },
  low: { label: 'Reorder', bg: '#fcebeb', fg: colors.danger },
  expiring: { label: 'Expiring', bg: '#faeeda', fg: colors.warn },
};

export default function StatusBadge({ status }: { status: LotStatus }) {
  const m = meta[status];
  return (
    <View style={[styles.badge, { backgroundColor: m.bg }]}>
      <Text style={[styles.text, { color: m.fg }]}>{m.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: { paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20 },
  text: { fontSize: 11, fontWeight: '600' },
});
