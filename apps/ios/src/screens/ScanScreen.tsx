import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert as RNAlert } from 'react-native';
import { colors, spacing } from '../theme/colors';
import { useInventory } from '../data/InventoryContext';
import { Feather } from '@expo/vector-icons';

export default function ScanScreen() {
  const { lots, logUsage, registerLot, settings } = useInventory();
  const [mode, setMode] = useState<'idle' | 'known' | 'new'>('idle');
  const [name, setName] = useState('');
  const [lotNum, setLotNum] = useState('EPC-2290');
  const [expires, setExpires] = useState('');
  const [qty, setQty] = useState('20');

  const olderDuplicate = lots.find((l) => l.item === 'HT5 Chemistry Pack' && l.lot === 'CHM-8801');

  function simulateKnownScan() {
    setMode('known');
  }

  function confirmKnownUsage() {
    const target = lots.find((l) => l.lot === 'CHM-8823');
    if (target) logUsage(target.id, 1);
    RNAlert.alert('Logged', 'Usage recorded.');
    setMode('idle');
  }

  function useOlderInstead() {
    if (olderDuplicate) logUsage(olderDuplicate.id, 1);
    RNAlert.alert('Logged', `Used lot ${olderDuplicate?.lot} instead.`);
    setMode('idle');
  }

  function confirmNewLot() {
    registerLot({
      item: name || 'New reagent item',
      lot: lotNum,
      qty: parseInt(qty, 10) || 1,
      expires: expires || 'unspecified',
      analyzer: 'Unassigned',
    });
    RNAlert.alert('Saved', 'New lot registered.');
    setMode('idle');
    setName('');
    setExpires('');
  }

  if (mode === 'known') {
    return (
      <View style={styles.container}>
        <View style={styles.resultCard}>
          <Feather name="check-circle" size={26} color={colors.mintDim} />
          <Text style={styles.resultLabel}>Lot recognized</Text>
        </View>
        <Row label="Item" value="HT5 Chemistry Pack" />
        <Row label="Lot number" value="CHM-8823" />
        <Row label="Expires" value="Sep 4" />
        {settings.fefoEnforcement && olderDuplicate && (
          <View style={styles.fefoNote}>
            <Feather name="arrow-down" size={16} color={colors.tealDeep} />
            <Text style={styles.fefoText}>
              Lot {olderDuplicate.lot} expires sooner ({olderDuplicate.expires}) and has {olderDuplicate.qty} left. Use that one first.
            </Text>
          </View>
        )}
        <TouchableOpacity style={styles.primaryBtn} onPress={confirmKnownUsage}>
          <Text style={styles.primaryBtnText}>Log usage anyway</Text>
        </TouchableOpacity>
        {olderDuplicate && (
          <TouchableOpacity style={styles.secondaryBtn} onPress={useOlderInstead}>
            <Text style={styles.secondaryBtnText}>Use lot {olderDuplicate.lot} instead</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.ghostBtn} onPress={() => setMode('idle')}>
          <Text style={styles.ghostBtnText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (mode === 'new') {
    return (
      <View style={styles.container}>
        <View style={styles.resultCard}>
          <Feather name="alert-circle" size={26} color={colors.warn} />
          <Text style={styles.resultLabel}>Unrecognized barcode — register this lot</Text>
        </View>
        <Text style={styles.fieldLabel}>Item name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="EPOC Test Card Box" />
        <Text style={styles.fieldLabel}>Lot number (from barcode)</Text>
        <TextInput style={styles.input} value={lotNum} onChangeText={setLotNum} />
        <Text style={styles.fieldLabel}>Expiration date</Text>
        <TextInput style={styles.input} value={expires} onChangeText={setExpires} placeholder="Aug 15, 2026" />
        <Text style={styles.fieldLabel}>Starting quantity</Text>
        <TextInput style={styles.input} value={qty} onChangeText={setQty} keyboardType="number-pad" />
        <TouchableOpacity style={styles.primaryBtn} onPress={confirmNewLot}>
          <Text style={styles.primaryBtnText}>Save lot</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ghostBtn} onPress={() => setMode('idle')}>
          <Text style={styles.ghostBtnText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.scanTarget}>
        <Feather name="camera" size={30} color={colors.sage} />
        <Text style={styles.scanHint}>Point camera at barcode</Text>
      </View>
      <Text style={styles.fieldLabel}>Demo — simulate a scan</Text>
      <TouchableOpacity style={styles.secondaryBtn} onPress={simulateKnownScan}>
        <Text style={styles.secondaryBtnText}>Simulate: scan known lot</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondaryBtn} onPress={() => setMode('new')}>
        <Text style={styles.secondaryBtnText}>Simulate: scan new lot</Text>
      </TouchableOpacity>
    </View>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.statLine}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.cream, padding: spacing.lg },
  scanTarget: { borderWidth: 1.5, borderColor: colors.border, borderStyle: 'dashed', borderRadius: 14, height: 150, alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: spacing.lg },
  scanHint: { fontSize: 12, color: colors.sage },
  fieldLabel: { fontSize: 12, color: colors.sage, marginTop: spacing.sm, marginBottom: 6 },
  input: { borderWidth: 0.5, borderColor: colors.border, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 10, fontSize: 14, backgroundColor: colors.white, marginBottom: 4 },
  primaryBtn: { backgroundColor: colors.tealDeep, borderRadius: 999, paddingVertical: 13, alignItems: 'center', marginTop: spacing.md },
  primaryBtnText: { color: colors.cream, fontWeight: '600', fontSize: 14 },
  secondaryBtn: { borderWidth: 0.5, borderColor: colors.border, borderRadius: 999, paddingVertical: 12, alignItems: 'center', marginBottom: spacing.sm, backgroundColor: colors.white },
  secondaryBtnText: { color: colors.ink, fontSize: 14, fontWeight: '500' },
  ghostBtn: { alignItems: 'center', paddingVertical: 10 },
  ghostBtnText: { color: colors.sage, fontSize: 14 },
  resultCard: { alignItems: 'center', marginBottom: spacing.md, gap: 6 },
  resultLabel: { fontSize: 13, color: colors.sage, textAlign: 'center' },
  statLine: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6 },
  statLabel: { fontSize: 13, color: colors.sage },
  statValue: { fontSize: 13, color: colors.ink, fontWeight: '500' },
  fefoNote: { flexDirection: 'row', gap: 8, backgroundColor: '#eef5f3', borderRadius: 10, padding: 12, marginVertical: spacing.sm },
  fefoText: { fontSize: 12, color: colors.tealDeep, flex: 1 },
});
