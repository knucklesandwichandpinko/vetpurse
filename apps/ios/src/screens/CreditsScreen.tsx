import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { colors, spacing, cardShadow } from '../theme/colors';
import { useInventory } from '../data/InventoryContext';
import { VendorCredit } from '../data/mockData';

export default function CreditsScreen() {
  const { credits, addCredit, markCreditReceived } = useInventory();
  const [vendor, setVendor] = useState('');
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');

  const outstanding = credits.filter((c) => !c.received).reduce((sum, c) => sum + c.amount, 0);

  function handleSave() {
    if (!vendor.trim() || !amount.trim()) return;
    addCredit({ vendor: vendor.trim(), amount: parseFloat(amount) || 0, reason: reason.trim() || 'No reason provided' });
    setVendor('');
    setAmount('');
    setReason('');
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: spacing.lg }}>
      <View style={styles.totalBanner}>
        <Text style={styles.totalLabel}>Outstanding credits</Text>
        <Text style={styles.totalValue}>${outstanding.toLocaleString()}</Text>
      </View>

      <Text style={styles.sectionLabel}>Add a credit</Text>
      <View style={styles.card}>
        <Text style={styles.fieldLabel}>Vendor</Text>
        <TextInput style={styles.input} value={vendor} onChangeText={setVendor} placeholder="Fujifilm" />
        <Text style={styles.fieldLabel}>Amount ($)</Text>
        <TextInput style={styles.input} value={amount} onChangeText={setAmount} placeholder="150" keyboardType="decimal-pad" />
        <Text style={styles.fieldLabel}>Reason</Text>
        <TextInput style={styles.input} value={reason} onChangeText={setReason} placeholder="Damaged shipment, rebate, etc." />
        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.saveBtnText}>Save credit</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionLabel}>All credits</Text>
      <View style={styles.card}>
        {credits.map((c, i) => (
          <CreditRow key={c.id} credit={c} last={i === credits.length - 1} onMarkReceived={() => markCreditReceived(c.id)} />
        ))}
      </View>
    </ScrollView>
  );
}

function CreditRow({ credit, last, onMarkReceived }: { credit: VendorCredit; last: boolean; onMarkReceived: () => void }) {
  return (
    <View style={[styles.creditRow, !last && styles.rowBorder]}>
      <View style={{ flex: 1, marginRight: 8 }}>
        <Text style={styles.vendorName}>{credit.vendor}</Text>
        <Text style={styles.reasonText}>{credit.reason}</Text>
        {!credit.received && (
          <TouchableOpacity style={styles.markBtn} onPress={onMarkReceived}>
            <Text style={styles.markBtnText}>Mark as received</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={styles.amountText}>${credit.amount.toLocaleString()}</Text>
        <CreditBadge received={credit.received} />
      </View>
    </View>
  );
}

function CreditBadge({ received }: { received: boolean }) {
  return (
    <View style={[styles.badge, { backgroundColor: received ? '#e1f5ee' : '#faeeda' }]}>
      <Text style={[styles.badgeText, { color: received ? colors.mintDim : colors.warn }]}>
        {received ? 'Received' : 'Outstanding'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.cream },
  totalBanner: { backgroundColor: '#eef5f3', borderRadius: 14, padding: spacing.lg, alignItems: 'center', marginBottom: spacing.lg },
  totalLabel: { fontSize: 12, color: colors.sage, marginBottom: 4 },
  totalValue: { fontSize: 26, fontWeight: '700', color: colors.tealDeep },
  sectionLabel: { fontSize: 11, color: colors.sage, textTransform: 'uppercase', letterSpacing: 0.5, fontWeight: '600', marginBottom: spacing.sm },
  card: { backgroundColor: colors.white, borderRadius: 14, padding: spacing.md, marginBottom: spacing.lg, ...cardShadow },
  fieldLabel: { fontSize: 12, color: colors.sage, marginTop: spacing.sm, marginBottom: 6 },
  input: { borderWidth: 0.5, borderColor: colors.border, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 10, fontSize: 14, backgroundColor: colors.cream },
  saveBtn: { backgroundColor: colors.tealDeep, borderRadius: 999, paddingVertical: 12, alignItems: 'center', marginTop: spacing.md },
  saveBtnText: { color: colors.cream, fontWeight: '600', fontSize: 14 },
  creditRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 12 },
  rowBorder: { borderBottomWidth: 0.5, borderBottomColor: colors.border },
  vendorName: { fontSize: 13.5, fontWeight: '600', color: colors.ink },
  reasonText: { fontSize: 11.5, color: colors.sage, marginTop: 2, marginBottom: 6 },
  markBtn: { alignSelf: 'flex-start', borderWidth: 0.5, borderColor: colors.border, borderRadius: 999, paddingHorizontal: 10, paddingVertical: 5 },
  markBtnText: { fontSize: 11, color: colors.tealDeep, fontWeight: '500' },
  amountText: { fontSize: 16, fontWeight: '700', color: colors.tealDeep, marginBottom: 4 },
  badge: { paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20 },
  badgeText: { fontSize: 10.5, fontWeight: '600' },
});
