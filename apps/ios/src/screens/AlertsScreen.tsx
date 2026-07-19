import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { colors, spacing, cardShadow } from '../theme/colors';
import { useInventory } from '../data/InventoryContext';
import { Feather } from '@expo/vector-icons';
import { Alert } from '../data/mockData';

const toneColor: Record<Alert['tone'], string> = {
  danger: colors.danger,
  warn: colors.warn,
  neutral: colors.sage,
};

const toneBg: Record<Alert['tone'], string> = {
  danger: '#fcebeb',
  warn: '#faeeda',
  neutral: '#f6f4ee',
};

export default function AlertsScreen() {
  const { alerts } = useInventory();

  return (
    <View style={styles.container}>
      <FlatList
        data={alerts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={[styles.iconChip, { backgroundColor: toneBg[item.tone] }]}>
              <Feather name={item.icon as any} size={14} color={toneColor[item.tone]} />
            </View>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.text}>{item.text}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.cream, padding: spacing.lg },
  row: { flexDirection: 'row', backgroundColor: colors.white, borderRadius: 12, padding: 12, marginBottom: 8, ...cardShadow },
  iconChip: { width: 26, height: 26, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 13, color: colors.ink },
  time: { fontSize: 11, color: colors.sage, marginTop: 3 },
});
