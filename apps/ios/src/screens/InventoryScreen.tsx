import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import { colors, spacing, cardShadow } from '../theme/colors';
import { useInventory } from '../data/InventoryContext';
import StatusBadge from '../components/StatusBadge';
import { Lot } from '../data/mockData';

export default function InventoryScreen() {
  const { lots } = useInventory();
  const [query, setQuery] = useState('');

  const filtered = lots.filter((l) =>
    (l.item + l.lot + l.analyzer).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Search lots"
        value={query}
        onChangeText={setQuery}
      />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <LotRow lot={item} />}
        ListEmptyComponent={<Text style={styles.empty}>No matching lots.</Text>}
      />
    </View>
  );
}

function LotRow({ lot }: { lot: Lot }) {
  return (
    <View style={styles.row}>
      <View style={{ flex: 1 }}>
        <Text style={styles.itemName}>{lot.item}</Text>
        <Text style={styles.itemSub}>{lot.lot} · exp {lot.expires} · {lot.qty} left</Text>
      </View>
      <StatusBadge status={lot.status} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.cream, padding: spacing.lg },
  search: { borderWidth: 0.5, borderColor: colors.border, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 10, fontSize: 14, backgroundColor: colors.white, marginBottom: spacing.md },
  row: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.white, borderRadius: 12, padding: 12, marginBottom: 8, ...cardShadow },
  itemName: { fontSize: 13.5, fontWeight: '600', color: colors.ink },
  itemSub: { fontSize: 11.5, color: colors.sage, marginTop: 2 },
  empty: { textAlign: 'center', color: colors.sage, fontSize: 13, marginTop: spacing.xl },
});
